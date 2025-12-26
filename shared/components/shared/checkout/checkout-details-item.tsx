import { cn } from "@/lib/utils";
import { useCartStore } from "@/shared/store";
import { ReactNode } from "react";
import { Skeleton } from "../../ui";
type CheckoutDetailsItemProps = {
  className?: string;
  title: ReactNode;
  price: number;
};
export function CheckoutDetailsItem({
  price,
  title,
  className,
}: CheckoutDetailsItemProps) {
  const loading = useCartStore((state) => state.loading);

  return (
    <div className={cn("flex my-4 text-lg", className)}>
      <div className="flex-1 flex text-neutral-500">
        {title}:
        <div className="flex-1 border-b-2 border-dashed border-b-orange-200 relative -top-1 mx-2" />
      </div>
      {loading ? (
        <Skeleton className="h-7 w-13.5" />
      ) : (
        <span className="font-bold">{price} ₽</span>
      )}
    </div>
  );
}
