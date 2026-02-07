import { FormInput } from "../forms";
import { WhiteBlock } from "../white-block";
import { PhoneNumberInput } from "../phone-number-input";

export const CheckoutPersonalData = ({ className }: { className?: string }) => {
  return (
    <WhiteBlock title="2. Персональные данные" className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput
          name="firstName"
          className="text-base"
          placeholder="Имя"
          label="Имя"
        />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Фамилия"
          label="Фамилия"
        />
        <FormInput
          name="email"
          type="email"
          className="text-base"
          placeholder="E-mail"
          label="E-mail"
        />

        {/* https://www.npmjs.com/package/react-phone-number-input */}
        {/* <FormInput
          name="phone"
          type="tel"
          className="text-base"
          placeholder="Телефон"
          label="Телефон"
        /> */}

        <PhoneNumberInput label="Ваш номер" name={"phone"} />
      </div>
    </WhiteBlock>
  );
};
