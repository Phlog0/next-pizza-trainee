import type { Metadata } from "next";
import { Header } from "@/shared/components/shared/header";
import { Suspense } from "react";
import { Skeleton } from "@/shared/components/ui";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function HomeLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense fallback={<Skeleton className="w-full h-20" />}>
        <Header />
      </Suspense>
      <main className="min-h-screen">
        {modal}
        {children}
      </main>
    </div>
  );
}
