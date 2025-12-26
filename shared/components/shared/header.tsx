"use client";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { HeaderSearch } from "./header-search";
import { CartButton } from "./cart-button";
import { useCartStore } from "@/shared/store";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
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
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.has("paid")) {
      setTimeout(
        () =>
          toast.success("Оплата успешно произведена!", {
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
      <Container className="flex items-center gap-4 justify-between py-8">
        <Link href={"/"} className="flex gap-4">
          <Image src="/logo.png" width={35} height={35} alt="Logo" />
          <div>
            <h1 className="text-2xl uppercase font-black">next pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              Вкусней уже некуда
            </p>
          </div>
        </Link>
        {!hasCheckout && <HeaderSearch />}

        {open && <AuthModal open={open} onClose={() => setOpen(false)} />}
        {/* КНОПКА */}
        <ProfileButton onSignIn={() => setOpen(true)} />
        {hasCart && <CartButton />}
      </Container>
    </header>
  );
}
