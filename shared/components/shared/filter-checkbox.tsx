import React from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}
type FilterCheckboxExtendedProps = {
  checkboxGroupName: string;
};
export const FilterCheckbox = ({
  text,
  value,
  endAdornment, //Это из material UI (доп если нужно)
  onCheckedChange,
  checked,
  checkboxGroupName,
}: FilterCheckboxProps & FilterCheckboxExtendedProps) => {
  return (
    <div className="flex items-center space-x-2 transition-all cursor-pointer hover:bg-primary/10 rounded-xl">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-xl w-6 h-6"
        id={`checkbox-${checkboxGroupName}-${value}`}
      />
      <label
        htmlFor={`checkbox-${checkboxGroupName}-${value}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
