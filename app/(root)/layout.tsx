import type { Metadata } from "next";
import { Header } from "@/shared/components/shared/header";

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
      <Header />
      <main className="min-h-screen">
        {modal}
        {children}
      </main>
    </div>
  );
}
