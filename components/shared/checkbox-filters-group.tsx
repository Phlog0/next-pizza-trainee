"use client";
import React, { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { cn } from "@/lib/utils";
import { Input } from "../ui";

type Item = FilterChecboxProps;
type CheckboxFiltersGroupProps = {
  className?: string;
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceHolder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string;
};

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
  defaultItems, //связан с limit
  items,
  onChange,
  title,
  className,
  defaultValue,
  limit = 5,
  searchInputPlaceHolder = "Поиск...",
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  //   const list = showAll ? items : defaultItems.slice(0, limit);
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);
  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceHolder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-2 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div
          className={`${showAll ? "border-t border-t-neutral-100 mt-4" : ""}`}
        >
          <button
            className="text-primary mt-4 cursor-pointer"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
