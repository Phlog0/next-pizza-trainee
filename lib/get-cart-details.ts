import { CartDto } from "@/shared/services/dto";

import { calcCartItemPrice } from "./calc-cart-item-price";

export type TCartStateItem = {
  id: number;
  quantity: number;
  imageUrl: string;
  productSize?: number | null;
  productType?: number | null;
  // Есть totalAmount - это все товары (весь список). Price - это функция подсчёта одного товара корзины (с ингредиентами и прочимии штуковинами)
  title: string;
  price: number;
  ingredients: { price: number; title: string }[] | [];
  // ingredients: Pick<Ingredient, "price" | "title">[];
};

type ReturnType = {
  totalAmount: number;
  cartItems: TCartStateItem[];
};
export const getCartDetails = (data: CartDto): ReturnType => {
  console.log({ data });
  const flatItems: TCartStateItem[] = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    title: item.productVariant.product.title,
    imageUrl: item.productVariant.product.imageUrl,
    ingredients: item.ingredients,
    productSize: item.productVariant.productSize,
    productType: item.productVariant.productType,
    price: calcCartItemPrice(item),
  }));
  return { totalAmount: data.totalAmount, cartItems: flatItems };
};
