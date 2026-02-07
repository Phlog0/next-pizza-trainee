import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(6, { error: "Пароль должен быть не менее 6 символов" });
export const formLoginSchema = z.object({
  email: z.email({ error: "Введите корректную почту" }),
  password: passwordSchema,
});
export const formRegisterSchema = formLoginSchema
  .extend({
    fullName: z
      .string()
      .min(2, { error: "Имя долнжо содердать не менее 2 символов" }),
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type InferedFormLoginSchema = z.infer<typeof formLoginSchema>;
export type InferedFormRegisterSchema = z.infer<typeof formRegisterSchema>;
