import { cn } from "@/lib/utils";
import React from "react";
type CartItemImageProps = {
  src: string;
  className?: string;
};
export function CartItemImage({ src, className }: CartItemImageProps) {
  return <img src={src} alt="Pizza" className={cn("w-14 h-14", className)} />;
}
