import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
}
