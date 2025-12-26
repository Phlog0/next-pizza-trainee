"use client";
import { Toaster } from "@/shared/components/ui";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader color="#dd7922" />
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </>
  );
}
