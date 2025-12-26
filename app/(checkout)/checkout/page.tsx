"use client";
import { Title, WhiteBlock } from "@/shared/components/shared";
import { toast } from "sonner";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckoutCartItems,
  CheckoutDeliveryAdress,
  checkoutFormSchema,
  CheckoutPersonalData,
  CheckoutSidebar,
  InferedCheckoutFormSchema,
} from "@/shared/components/shared/checkout";
import { useCartStore } from "@/shared/store";
import { cn } from "@/lib/utils";
import { createOrder } from "@/app/actions";
import { useState } from "react";
import { set } from "zod";
import { verifyConnection } from "@/lib/email";
import { calcTotalAmountWithPercentages } from "@/lib";
export default function CheckoutPage() {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<InferedCheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "sergey.zadorkin.1@yandex.ru",
      firstName: "Sergey",
      lastName: "Zadorkin",
      phone: "1111111111111111111",
      adress: "г Москва",
      comment: "доп.коммент",
    },
  });
  const onSubmit: SubmitHandler<InferedCheckoutFormSchema> = async (data) => {
    try {
      setSubmitting(true);
      const url = await createOrder({
        ...data,
        totalAmount:
          calcTotalAmountWithPercentages(totalAmount)
            .totalAmountWithPercentages,
      });
      toast.success("Заказ успешно оформлен. Переход на оплату...", {
        style: {
          backgroundColor: "#f97316", // orange-500
          color: "white",
          border: "none",
        },
      });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      setSubmitting(false);

      toast.error("Не удалось создать заказ!", {
        style: {
          backgroundColor: "#f94316", // orange-500
          color: "white",
          border: "none",
        },
      });
    }
  };
  const onError = (errors: any) => {
    console.log("form errors:", errors);
  };

  const loading = useCartStore((state) => state.loading);
  return (
    <div className="mt-9">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <Title text="Оформление заказа" size="xl" />
          <fieldset
            className={cn(
              "flex justify-between gap-5 w-full transition-opacity",
              {
                "pointer-events-none opacity-50": loading,
              }
            )}
            disabled={loading}
          >
            <div className="flex flex-col gap-10 flex-2">
              <WhiteBlock title="1. Корзина">
                <CheckoutCartItems className="h-90" />
              </WhiteBlock>
              <CheckoutPersonalData />
              {/* опять странно. Весь page client, но мне нужно еще раз использовать use client в AdressInput */}
              <CheckoutDeliveryAdress />
            </div>
            <CheckoutSidebar submitting={submitting} />
          </fieldset>
        </form>
      </FormProvider>
    </div>
  );
}
