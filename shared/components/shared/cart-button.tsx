"use client";
import { ArrowRight, Loader2, ShoppingCart } from "lucide-react";
import { Button, Skeleton } from "../ui";
import { cn } from "@/lib/utils";
import { CartDraver } from "./cart-draver";
import { useCartStore } from "@/shared/store";

export function CartButton({ className }: { className?: string }) {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const loading = useCartStore((state) => state.loading);
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <CartDraver>
      {loading ? (
        <Skeleton className="w-[105px] h-10 animate-bounce" />
      ) : (
        <Button disabled={loading} className={cn("relative group", className)}>
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <b className="hidden md:block">{totalAmount} Р.</b>
              <span className="hidden md:block h-full w-px bg-white/30 mx-3"></span>
              <div className="relative flex items-center gap-3 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>{cartItems.length}</b>
              </div>
              <ArrowRight className="w-5 right-5 absolute transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100" />
            </>
          )}
        </Button>
      )}
    </CartDraver>
  );
}
