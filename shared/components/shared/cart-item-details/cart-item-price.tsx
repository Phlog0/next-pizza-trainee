import { cn } from "@/lib/utils";
import React from "react";
type CartItemPriceProps = {
  value: number;
  className?: string;
};
export function CartItemPrice({ value, className }: CartItemPriceProps) {
  return (
    <h2 className={cn("text-[12px] sm:text-base font-bold", className)}>
      {value} ₽
    </h2>
  );
}
