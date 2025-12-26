import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { error: "Имя должно содержать не менее 2-х символов" }),
  lastName: z
    .string()
    .min(2, { error: "Фамилия должна содержать не менее 2-х символов" }),
  email: z.email({ error: "Введите корректный E-mail" }),
  phone: z.string().min(10, { error: "Введите корректный номер телефона" }),
  adress: z.string().min(5, { error: "Введите корректный адрес" }),
  comment: z.string().optional(),
});

export type InferedCheckoutFormSchema = z.infer<typeof checkoutFormSchema>;
