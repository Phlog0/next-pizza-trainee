"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Button } from "../ui";

const cats = [
  { id: 1, name: "Пицца" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
];

export function Categories({ className }: { className?: string }) {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn("inline-flex gap-3 bg-gray-50 rounded-2xl", className)}>
      {cats.map(({ name, id }, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center justify-center font-bold px-5 h-11 rounded-2xl cursor-pointer",
            categoryActiveId === id &&
              "bg-red-300 shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
        >
          <Button>{name}</Button>
        </a>
      ))}
    </div>
  );
}
