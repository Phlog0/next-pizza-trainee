"use client";
import { InputHTMLAttributes } from "react";

import "react-dadata/dist/react-dadata.css";
import { useFormContext } from "react-hook-form";
import { RequiredSymbol } from "./required-symbol";
import { ClearButton } from "./forms";
import { ErrorText } from "./error-text";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
type NumberInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: "phone";
  label: string;
  required?: boolean;
  className?: string;
};
export function PhoneNumberInput({
  name,
  label,
  required,
  ...props
}: NumberInputProps) {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useFormContext();
  const value = watch(name);
  const errorText = errors[name]?.message;
  const onClickClear = () => {
    setValue(name, "", {
      // после очистки покажутся красные надписи с ошибками
      // shouldValidate: true,
    });
  };

  return (
    <div>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
        🇷🇺 +7{" "}
        <PhoneInput
          country="RU"
          control={control}
          placeholder="Введите номер телефона"
          name={name}
          maxLength="13"
          // value={numberValue}
          // countries={["RU"]}
          // {...register(name)} {...props}
        />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={String(errorText)} className="mt-2" />}
    </div>
  );
}
