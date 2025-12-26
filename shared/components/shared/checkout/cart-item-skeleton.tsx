import { Skeleton } from "../../ui";

export function CartItemSkeleton({ className }: { className?: string }) {
  return (
    <div className="flex justify-between p-5 border-b">
      <Skeleton className="w-14 h-14" />
      <Skeleton className="w-50" />
    </div>
  );
}
