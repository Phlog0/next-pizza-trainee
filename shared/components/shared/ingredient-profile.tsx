import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

type IngredientProps = {
  className?: string;
  imageUrl: string;
  title: string;
  price: number;
  isAsctive?: boolean;
  onClick?: () => void;
};
export function IngredientProfile({
  className,
  imageUrl,
  price,
  title,
  isAsctive,
  onClick,
}: IngredientProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-1 rounded-md cursor-pointer shadow-md relative text-center items-center",
        {
          "border border-primary": isAsctive,
        },
        className
      )}
      onClick={onClick}
    >
      {isAsctive && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <img src={imageUrl} alt={title} className="object-cover max-w-[4rem]" />
      <span className="text-xs mb-1">{title}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
}
