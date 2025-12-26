"use client";
import React, { useState } from "react";
import { FilterCheckboxProps, FilterCheckbox } from "./filter-checkbox";
import { cn } from "@/lib/utils";
import { Input, Skeleton } from "../ui";

type Item = FilterCheckboxProps;
type CheckboxFiltersGroupProps = {
  className?: string;
  title: string;
  items: Item[];
  defaultItems?: Item[];
  defaultLimit?: number;
  searchInputPlaceHolder?: string;
  defaultValue?: string;
  isLoading?: boolean;
  checkboxGroupName: string;
  selectedValues: Set<string>;
  onClickCheckbox: (id: string) => void;
};

export const CheckboxFiltersGroup = ({
  defaultItems, //связан с limit
  items,

  title,
  className,

  defaultLimit = 5,
  searchInputPlaceHolder = "Поиск...",
  isLoading,

  checkboxGroupName,
  selectedValues,
  onClickCheckbox,
}: CheckboxFiltersGroupProps) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  if (isLoading)
    return (
      <div className="flex flex-col gap-3 mt-5">
        {Array(defaultLimit)
          .fill("")
          .map((_, index) => (
            <Skeleton className="h-[20px] w-full rounded-[8px]" key={index} />
          ))}

        <Skeleton className="h-[20px] w-[40%] rounded-[8px]" />
      </div>
    );

  const list = showAll
    ? items.filter((item) => {
        return item.text.toLowerCase().includes(searchValue.toLowerCase());
      })
    : (defaultItems || items).slice(0, defaultLimit);
  return (
    <div className={cn(className)}>
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
        {list.map((item, index) => {
          return (
            <FilterCheckbox
              key={index}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
              checked={selectedValues.has(item.value)}
              onCheckedChange={() => onClickCheckbox(item.value)}
              checkboxGroupName={checkboxGroupName}
            />
          );
        })}
      </div>
      {items.length > defaultLimit && (
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
