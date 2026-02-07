"use server";

import { sendEmail } from "@/lib/email";
import { prisma } from "@/prisma/prisma";
import { InferedCheckoutFormSchema } from "@/shared/components/shared/checkout";
import { COOKIES_KEYS } from "@/shared/constants";
import { cookies } from "next/headers";
import {
  PayOrderTemplate,
  VerificationUserTemplate,
} from "@/shared/components/shared/email-templates";
import { createPayment } from "@/lib";
import { Prisma } from "@prisma/client";
import { getUserSession } from "@/lib/get-user-session";
import { hashSync } from "bcrypt";
export async function createOrder(
  values: InferedCheckoutFormSchema & { totalAmount: number },
) {
  try {
    const cookieStore = await cookies();
    const cartToken = cookieStore.get(COOKIES_KEYS.CART_TOKEN)?.value;
    if (!cartToken) {
      throw new Error("cartToken is not found!");
    }
    const userCart = await prisma.cart.findFirst({
      where: {
        token: cartToken,
      },
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productVariant: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });
    if (!userCart) {
      throw new Error("Cart is not found!");
    }
    if (userCart?.totalAmount === 0) {
      throw new Error("cart is empty");
    }
    const newOrder = await prisma.order.create({
      data: {
        adress: values.adress,
        email: values.email,
        fullName: values.firstName + " " + values.lastName,
        phone: values.phone,
        totalAmount: values.totalAmount,
        status: "PENDING",
        items: JSON.stringify(userCart.items),
        token: cartToken,
        comment: values.comment,
      },
    });

    // Это типа очистка корзины. Ведь если всё успешно пройдет, то данные в корзине уже и не нужны
    await prisma.cart.update({
      where: { id: userCart.id },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    const paymentData = await createPayment({
      description: `Оплата заказа🍕 №${newOrder.id}`,
      orderId: newOrder.id,
      totalAmount: newOrder.totalAmount,
    });

    await prisma.order.update({
      where: {
        id: newOrder.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    const paymentUrl = paymentData.confirmation.confirmation_url;
    await sendEmail({
      to: values.email,
      subject: `Оплата заказа🍕 №${newOrder.id}`,
      html: PayOrderTemplate({
        orderId: newOrder.id,
        totalAmount: newOrder.totalAmount,
        paymentUrl: paymentUrl,
      }),
    });
    return paymentUrl;
  } catch (error) {
    console.error(`[CreateOrder] Server error, ${error}`);
    throw error;
  }

  // await verifyConnection();
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  //* https://nextjs.org/docs/app/guides/forms#form-validation валидация с zod красивая
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error("Пользователь не найден");
    }

    if (body.password && typeof body.password === "string") {
      await prisma.user.update({
        where: { id: Number(currentUser.id) },
        data: {
          fullName: body.fullName,
          email: body.email,
          password: hashSync(body.password, 10),
        },
      });
    } else {
      await prisma.user.update({
        where: { id: Number(currentUser.id) },
        data: {
          fullName: body.fullName,
          email: body.email,
        },
      });
    }
  } catch (error) {
    console.error("Error [UPDATE_USER]", error);
    throw error;
  }
}

export async function registerUser(
  body: Pick<Prisma.UserCreateInput, "email" | "password" | "fullName">,
) {
  try {
    const user = await prisma.user.findFirst({ where: { email: body.email } });
    if (user) {
      if (!user.verified) {
        throw new Error("Почта не подтверждена!");
      }
      throw new Error("Пользователь уже существует!");
    }

    const createdUser = await prisma.user.create({
      data: {
        email: body.email,
        fullName: body.fullName,
        password: hashSync(body.password, 10),
      },
    });
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    await prisma.verificationCode.create({
      data: {
        code: newCode,
        userId: createdUser.id,
      },
    });
    sendEmail({
      to: createdUser.email,
      subject: "Next pizza | Подтверждение верификации",
      html: VerificationUserTemplate({ code: newCode }),
    });
  } catch (error) {
    console.error("Error [REGISTER_USER]", error);
    throw error;
  }
}
