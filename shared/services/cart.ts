import { Cart } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "./api-constants";
import { CartDto, CreateCartItemValues } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDto> => {
  return (await axiosInstance.get<CartDto>(ApiRoutes.CART)).data;
};
export const updateCartItemQuantity = async (
  cartItemId: number,
  quantity: number
): Promise<CartDto> => {
  return (
    await axiosInstance.patch<CartDto>(ApiRoutes.CART + "/" + cartItemId, {
      quantity,
    })
  ).data;
};
export const removeCartItem = async (cartItemId: number): Promise<CartDto> => {
  return (
    await axiosInstance.delete<CartDto>(ApiRoutes.CART + "/" + cartItemId)
  ).data;
};
export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDto> => {
  return (await axiosInstance.post<CartDto>(ApiRoutes.CART + "/", values)).data;
};
