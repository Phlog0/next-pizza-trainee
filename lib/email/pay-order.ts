// lib/email.js
import { transporter } from "./transporter";

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: `${process.env.EMAIL_FROM || process.env.EMAIL_USER}`,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      //   text, // plain text версия
      html, // HTML версия
    });

    console.log("Письмо отправлено:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Ошибка отправки письма:", error);
    throw error;
  }
}
