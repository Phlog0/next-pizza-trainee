import { Container, Header } from "@/shared/components/shared";
import { Metadata } from "next";
import React from "react";

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
      <Header
        className="border-b border-gray-500"
        hasCheckout={true}
        hasCart={false}
      />
      <Container>{children}</Container>
    </main>
  );
}
