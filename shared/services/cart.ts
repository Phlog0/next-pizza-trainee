import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "./api-constants";
import { CartDto, CreateCartItemValues } from "./dto/cart.dto";
export type GetCartApiResponse<T = null> = {
  status: "success" | "error" | "not_found";
  cart: T;
  message: string | null;
};
export const getCart = async (): Promise<CartDto | null> => {
  try {
    const response = await axiosInstance.get<GetCartApiResponse<CartDto>>(
      ApiRoutes.CART
    );

    if (response.data.status === "success" && response.data.cart) {
      return response.data.cart;
    }

    if (response.data.status === "not_found") {
      return null;
    }
    throw new Error(response.data.message || "Unknown error");
  } catch (error) {
    console.error("Failed to get cart:", error);
    return null;
  }
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
