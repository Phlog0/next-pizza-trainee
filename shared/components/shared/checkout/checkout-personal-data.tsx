import { FormInput } from "../forms";
import { WhiteBlock } from "../white-block";

export const CheckoutPersonalData = () => {
  return (
    <WhiteBlock title="2. Персональные данные">
      <div className="grid grid-cols-2 gap-5">
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

        {/* https://www.npmjs.com/package/react-input-mask */}
        <FormInput
          name="phone"
          type="tel"
          className="text-base"
          placeholder="Телефон"
          label="Телефон"
        />
      </div>
    </WhiteBlock>
  );
};
