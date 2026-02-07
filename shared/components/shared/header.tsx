"use client";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";

import Link from "next/link";
import { HeaderSearch } from "./header-search";
import { CartButton } from "./cart-button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals/auth-modal";

export function Header({
  className,
  hasCheckout = false,
  hasCart = true,
}: {
  className?: string;
  hasCheckout?: boolean;
  hasCart?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    let message = "";
    if (searchParams.has("paid")) {
      message = "Оплата успешно произведена!";
    }
    if (searchParams.has("verified")) {
      message = "Аккаунт подтвержден!";
    }

    if (message) {
      setTimeout(
        () =>
          toast.success(message, {
            style: {
              backgroundColor: "#f97316", // orange-500
              color: "white",
              border: "none",
            },
          }),
        500
      );
    }
  }, []);
  return (
    <header className={cn("border-b", className)}>
      <Container className="grid grid-cols-[max-content_1fr] md:grid-cols-[max-content_1fr_min-content] gap-4 py-8 items-center">
        <Link href={"/"} className="flex gap-4 col-span-1">
          <Image src="/logo.png" width={35} height={35} alt="Logo" />
          <div>
            <h1 className="text-xl md:text-2xl uppercase font-black">
              next pizza
            </h1>
            <p className="text-sm text-gray-400 leading-3">
              Вкусней уже некуда
            </p>
          </div>
        </Link>
        {!hasCheckout && (
          <HeaderSearch className="col-span-2 md:col-span-1 order-last md:order-0" />
        )}
        {open && <AuthModal open={open} onClose={() => setOpen(false)} />}
        {/* КНОПКА */}
        <div className="col-span-1 flex justify-end gap-4">
          <ProfileButton onSignIn={() => setOpen(true)} />
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
}
