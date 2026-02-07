import { ApiRoutes } from "./api-constants";
import { axiosInstance } from "./axios-instance";
type UserData = {
  email: string;
  fullName: string;
};
export type MeApiResponse =
  | {
      error: "Unauthorized";
    }
  | UserData;
export const getMeData = async (): Promise<UserData | null> => {
  try {
    const response = await axiosInstance.get<MeApiResponse>(ApiRoutes.ME);

    if ("error" in response.data) {
      return null;
    }

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    throw new Error("Unknown error");
  } catch (error) {
    console.error("Failed to get cart:", error);
    return null;
  }
};
