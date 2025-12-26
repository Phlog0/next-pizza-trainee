"use client";
import { useId, useState } from "react";
import {
  AddressSuggestions,
  DaDataAddress,
  DaDataSuggestion,
} from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { Noop, useFormContext } from "react-hook-form";
import { RequiredSymbol } from "./required-symbol";
import { ClearButton } from "./forms";
export function AdressInput({
  onChange,
  name,
  label,
  required,
}: {
  onChange: (
    value: DaDataSuggestion<DaDataAddress>["value"] | undefined
  ) => void;
  name: "adress";
  label: string;
  required?: boolean;
}) {
  const id = useId();
  const [addressValue, setAddressValue] = useState<
    DaDataSuggestion<DaDataAddress> | undefined
  >();

  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const value = watch(name);
  const errorText = errors[name]?.message;
  const onClickClear = () => {
    setValue(name, "", {
      // после очистки покажутся красные надписи с ошибками
      shouldValidate: true,
    });
    setAddressValue(undefined);
  };
  console.log({ name, value });

  return (
    <div>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
        <AddressSuggestions
          token="acdcf17d823f48f2d1da0237666951c8614ec19b"
          uid={id}
          onChange={(data) => {
            onChange(data?.value);
            setAddressValue(data);
          }}
          containerClassName="text-md"
          value={addressValue}
        />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
    </div>
  );
}
