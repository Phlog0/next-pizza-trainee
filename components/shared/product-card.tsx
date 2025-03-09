import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;

  className?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  className,
  id,
  imageUrl,
  price,
  title,
}) => {
  return (
    <div className={cn("", className)}>
      <Link href={"product/1"}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={title} />
        </div>
        <Title size="sm" text={title} className="mb-1 mt-3 font-bold" />
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt vero
          quibusdam numquam eum? Perspiciatis fuga ad totam aliquid ipsam sit
          delectus numquam veniam molestiae voluptatibus? Obcaecati minus
          voluptas nemo odit?
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-[20px]">
            от <b>{price} Р.</b>
          </span>
          <Button variant={"secondary"} className="text-base font-bold">
            <Plus size={20} className="mr-1" />
          </Button>
        </div>
      </Link>
    </div>
  );
};
