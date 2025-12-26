"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui";

export type AvailableVariant = {
  title: string;
  value: string;
  disabled?: boolean;
};

type GroupVariantsProps = {
  variants: readonly AvailableVariant[];
  className?: string;
  selectedValue: AvailableVariant["value"];
  onClick?: (value: AvailableVariant["value"]) => void;
};
export function GroupVariants({
  className,
  variants,
  onClick,
  selectedValue,
}: GroupVariantsProps) {
  return (
    <div
      className={cn(
        "w-full rounded-3xl p-1 select-none bg-amber-100",
        "flex gap-4 flex-wrap",
        className
      )}
    >
      {variants?.map((variant) => (
        <Button
          key={variant.title}
          onClick={() => onClick?.(variant.value)}
          disabled={variant.disabled}
          className={cn("transition-colors flex-1 ", {
            "bg-white shadow text-primary hover:bg-white":
              variant.value === selectedValue,
          })}
        >
          {variant.title}
        </Button>
      ))}
    </div>
  );
}
