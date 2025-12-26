"use client";
import { cn } from "@/lib/utils";
import { RequiredSymbol } from "../required-symbol";
import { Input } from "../../ui";
import { ErrorText } from "../error-text";
import { InputHTMLAttributes } from "react";
import { ClearButton } from "./clear-button";
import { useFormContext } from "react-hook-form";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
};
export const FormInput = ({
  name,
  className,
  label,
  required,
  ...props
}: FormInputProps) => {
  // будет брать контекст из FormProvider
  const {
    register,
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
  };
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={String(errorText)} className="mt-2" />}
    </div>
  );
};
