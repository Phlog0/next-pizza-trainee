import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductVariant,
} from "@prisma/client";
export type CartItemDto = CartItem & {
  productVariant: ProductVariant & {
    product: Product;
  };
  ingredients: Ingredient[];
};
export interface CartDto extends Cart {
  items: CartItemDto[];
}

export type CreateCartItemValues = {
  productVariantId: number;

  ingredientsIds?: number[];
};
