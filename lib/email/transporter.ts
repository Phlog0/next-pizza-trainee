import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
const transporterOptions: SMTPTransport.Options = {
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // true для порта 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
};
export const transporter = nodemailer.createTransport(transporterOptions);

// Проверка подключения
export const verifyConnection = async () => {
  try {
    await transporter.verify();
    console.log("✅ SMTP сервер готов принимать письма");
    return true;
  } catch (error) {
    console.error("❌ Ошибка подключения к SMTP:", error);
    return false;
  }
};
