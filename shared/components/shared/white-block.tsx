import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";
import { Title } from "./title";

type WhiteBlockProps = PropsWithChildren<{
  className?: string;
  contentClassName?: string;
  title?: string;
  endAdornment?: ReactNode;
}>;
export function WhiteBlock({
  className,
  contentClassName,
  endAdornment,
  title,
  children,
}: WhiteBlockProps) {
  return (
    <div className={cn("bg-white rounded-xl", className)}>
      {title && (
        <div className="flex items-center justify-between py-5 px-7 border-b border-b-gray-200">
          <Title text={title} size="sm" className="font-bold" />
          {endAdornment}
        </div>
      )}
      <div className={cn("px-5 py-4", contentClassName)}>{children}</div>
    </div>
  );
}
