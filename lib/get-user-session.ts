import { authOptions } from "@/shared/constants/next-auth-options";
import { getServerSession } from "next-auth";

export async function getUserSession() {
  const session = await getServerSession(authOptions);

  return session?.user ?? null;
}
