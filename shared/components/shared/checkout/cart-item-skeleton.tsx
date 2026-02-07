import { cn } from "@/lib/utils";
import { Skeleton } from "../../ui";

export function CartItemSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-between p-5 border-b", className)}>
      <Skeleton className="w-14 h-14" />
      <Skeleton className="w-50" />
    </div>
  );
}
