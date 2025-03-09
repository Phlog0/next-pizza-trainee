import { cn } from "@/lib/utils";

const cats = [
  "Пицца",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];
const activeIndex = 0;
export function Categories({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex gap-3 bg-gray-50 rounded-2xl", className)}>
      {cats.map((cat, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center justify-center font-bold px-5 h-11 rounded-2xl",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
}
