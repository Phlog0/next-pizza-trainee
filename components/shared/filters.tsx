import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

export function Filters({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="border border-y mt-5 bg-neutral-50 py-7 px-8">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        {/* ? why do I need min,max and value=[min,max] */}
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Моццарела", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Солённые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
        ]}
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Моццарела", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Солённые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
          { text: "Сырный соус", value: "1" },
          { text: "Моццарела", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Солённые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
          { text: "Сырный соус", value: "1" },
          { text: "Моццарела", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Солённые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
          { text: "Сырный соус", value: "1" },
          { text: "Моццарела", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Солённые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
        ]}
      />
    </div>
  );
}
