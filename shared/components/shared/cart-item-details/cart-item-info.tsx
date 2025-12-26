import { getCartItemsDetails } from "@/lib";
import { mapPizzaType, PizzaSize, PizzaType } from "@/shared/constants";
import { Ingredient } from "@prisma/client";
import React from "react";
type CartItemInfoProps = {
  className?: string;
  title: string;
  details: string;
};
export function CartItemInfo({ details, title }: CartItemInfoProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg leading-6 flex-1">{title}</h2>
      </div>
      {details.length > 0 && <p className="text-xs text-gray-400">{details}</p>}
    </div>
  );
}
