import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
}
