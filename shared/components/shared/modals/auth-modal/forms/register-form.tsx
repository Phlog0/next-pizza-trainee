import { FormProvider, useForm } from "react-hook-form";
import { formRegisterSchema, InferedFormRegisterSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "@/shared/components/shared";
import { FormInput } from "@/shared/components/shared/forms";
import { Button } from "@/shared/components/ui";
import { toast } from "sonner";
import { registerUser } from "@/app/actions";

type LoginFormProps = {
  onClose: VoidFunction;
};
export function RegisterForm({ onClose }: LoginFormProps) {
  const form = useForm<InferedFormRegisterSchema>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: InferedFormRegisterSchema) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success("Регистрация прошла успешно, подтвердите свою почту!");
      onClose();
    } catch (error) {
      console.error("Error [REGISTER]", error);
      toast.error("Ошибка авторизации" + error);
    }
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <Title text="Регистрация аккаунта" size="md" className="font-bold" />
        </div>
        <FormInput label="Полное имя" name="fullName" required />
        <FormInput label="E-mail" name="email" required />
        <FormInput label="Пароль" name="password" required type="password" />
        <FormInput
          label="Подтвердите пароль"
          name="confirmPassword"
          required
          type="password"
        />
        <Button
          type="submit"
          className="text-base"
          variant={form.formState.isSubmitting ? "loading" : "default"}
        >
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
}
