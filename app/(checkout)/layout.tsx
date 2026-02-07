import { Container, Header } from "@/shared/components/shared";
import { Skeleton } from "@/shared/components/ui";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Next Pizza | Корзина",
  description: "Корзина магазиан",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-amber-200/45">
      <Suspense fallback={<Skeleton className="w-full h-20" />}>
        <Header
          className="border-b border-gray-500"
          hasCheckout={true}
          hasCart={false}
        />
      </Suspense>
      <Container>{children}</Container>
    </main>
  );
}
