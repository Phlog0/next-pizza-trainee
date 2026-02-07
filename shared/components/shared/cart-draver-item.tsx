import { cn } from "@/lib/utils";
import {
  CartItemDetailsCountButton,
  CartItemImage,
  CartItemInfo,
  CartItemPrice,
  CartItemProps,
} from "./cart-item-details";
import { Trash2Icon } from "lucide-react";
import { Button } from "../ui";
import { useCartStore } from "@/shared/store";

type CartDriverItemProps = CartItemProps & {
  className?: string;
  hasCheckout?: boolean;
};
export function CartDraverItem({
  className,
  disabled,
  imageUrl,
  price,
  quantity,
  title,
  details,
  id,
  hasCheckout = false,
}: CartDriverItemProps) {
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const updateCartItemQuantityHandle = (
    type: "plus" | "minus",
    quantity: number,
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  const removeCartItemHandle = (id: number) => {
    removeCartItem(id);
  };
  return (
    <div
      className={cn(
        "flex bg-white gap-6 p-5 border-b",
        {
          "opacity-50 pointer-events-none": disabled,
        },
        className,
      )}
    >
      <CartItemImage src={imageUrl} />
      <div
        className={cn("flex-1", {
          "flex justify-between": hasCheckout,
        })}
      >
        <CartItemInfo title={title} details={details} />

        <div
          className={cn("flex justify-between items-center", {
            "gap-4": hasCheckout,
          })}
        >
          <CartItemDetailsCountButton
            quantity={quantity}
            onClick={(type) => updateCartItemQuantityHandle(type, quantity)}
          />
          <div className="flex items-center gap-3">
            <CartItemPrice value={price} />

            <Button
              type="button"
              className="cursor-pointer text-white"
              onClick={() => removeCartItemHandle(id)}
            >
              <Trash2Icon size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
