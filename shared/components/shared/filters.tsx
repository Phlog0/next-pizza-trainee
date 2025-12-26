"use client";
import { Title } from "./title";

import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import {
  RangeSliderPrice,
  useFilters,
  useIngredients,
  useQueryFilters,
} from "@/shared/hooks";

export function Filters({ className }: { className?: string }) {
  const { isLoading, ingredientItems } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredientItems.map((item) => ({
    value: `${item.id}`,
    text: item.title,
  }));
  const onPriceChange = (key: keyof RangeSliderPrice, value: number) => {
    filters.setPrice((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <CheckboxFiltersGroup
        title="Тип теста"
        checkboxGroupName={"pizzaTypes"}
        className="mt-5"
        items={[
          { text: "Тонкое", value: "2" },
          { text: "Традиционное", value: "1" },
        ]}
        selectedValues={filters.selectedPizzaTypesValues}
        onClickCheckbox={filters.togglePizzaTypesValues}
      />
      <CheckboxFiltersGroup
        title="Размер"
        checkboxGroupName={"sizes"}
        className="mt-5"
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        selectedValues={filters.selectedSizesValues}
        onClickCheckbox={filters.toggleSizesValues}
      />

      <div className="border border-y mt-5 bg-neutral-50 py-7 px-8">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={filters.price.priceFrom || 0}
            onChange={(e) => onPriceChange("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={filters.price.priceTo || 1000}
            onChange={(e) => onPriceChange("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.price.priceFrom || 0, filters.price.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            filters.setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        checkboxGroupName={"ingredients"}
        className="mt-5"
        defaultLimit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        isLoading={isLoading}
        selectedValues={filters.selectedIngredientsValues}
        onClickCheckbox={filters.toggleIngredientsValues}
      />
    </div>
  );
}
