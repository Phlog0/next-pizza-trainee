import { Controller, useFormContext } from "react-hook-form";
import { AdressInput } from "../adress-input";
import { FormTextarea } from "../forms";
import { WhiteBlock } from "../white-block";

export const CheckoutDeliveryAdress = () => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        {/* <FormInput
          label="Адрес"
          name="adress"
          className="text-base"
          placeholder="Адрес"
        /> */}
        <Controller
          control={control}
          name="adress"
          render={({ field, fieldState }) => (
            <>
              <AdressInput
                onChange={field.onChange}
                label="Адрес"
                name={field.name}
                required
              />
              {/* {fieldState.error?.message && (
                <ErrorText
                  text={fieldState.error.message || "Ошибка в адресе"}
                />
              )} */}
            </>
          )}
        />

        <FormTextarea
          label="Комментарий к заказу"
          name="comment"
          placeholder="Комментарий к заказу"
          className="text-base"
        />
      </div>
    </WhiteBlock>
  );
};
