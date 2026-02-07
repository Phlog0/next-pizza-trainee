"use client";
import { RequiredSymbol } from "../required-symbol";
import { Textarea } from "../../ui";
import { ErrorText } from "../error-text";
import { TextareaHTMLAttributes } from "react";
import { ClearButton } from "./clear-button";
import { useFormContext } from "react-hook-form";

type FormTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
};
export const FormTextarea = ({
  name,
  className,
  label,
  required,
  ...props
}: FormTextAreaProps) => {
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
    setValue(name, "");
  };
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Textarea className="h-12 text-md" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={String(errorText)} className="mt-2" />}
    </div>
  );
};
