import { cn } from "@/lib/utils";
import { PizzaSize } from "@/shared/constants";

export function ProductImage({
  className,
  size,
  imageTitle,
  imageUrl,
}: {
  className?: string;
  size: PizzaSize;
  imageUrl: string;
  imageTitle: string;
}) {
  return (
    <div className={cn("relative")}>
      <img
        src={imageUrl}
        alt={imageTitle}
        className={cn(
          "transition-all z-2 duration-300",
          {
            "transform scale-100": size === 20,
            "transform scale-110": size === 30,
            "transform scale-120": size === 40,
          },
          className,
          "object-contain"
        )}
      />

      <div className="absolute left-1/2 top-1/2 -translate-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px] z-[-1]" />
      <div className="absolute left-1/2 top-1/2 -translate-1/2 border-dashed border-2 rounded-full border-gray-200 w-[370px] h-[370px] z-[-1]" />
      <div />
    </div>
  );
}
