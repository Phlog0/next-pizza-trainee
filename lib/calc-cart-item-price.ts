import { CartItemDto } from "@/shared/services/dto";

export const calcCartItemPrice = (cartItem: CartItemDto) => {
  const ingredientPrice = cartItem.ingredients.reduce(
    (acc, item) => (acc += item.price),
    0
  );

  //Например для каждой пиццы по 1 сырному соусу, так что если я хочу 2 пиццы (но 2 пиццы это 1 карточка в списке покупок), то:
  return (ingredientPrice + cartItem.productVariant.price) * cartItem.quantity;
};
