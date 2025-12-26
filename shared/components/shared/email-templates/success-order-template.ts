import { CartItemDto } from "@/shared/services/dto";

export interface PayOrderTemplateProps {
  orderId: number;

  items: CartItemDto[];
}

export function SuccessOrderTemplate({
  orderId,

  items,
}: PayOrderTemplateProps) {
  const itemsList = items
    .map(
      (item) =>
        `<li>${item.productVariant.product.title} | ${
          item.productVariant.price
        } ₽ x ${item.quantity} шт = ${
          item.productVariant.price * item.quantity
        } ₽ </li>`
    )
    .join("");
  return `
    <div>
      <h1>Спасибо за покупку! 🎉</h1>
      <p>
        Ваш заказ ${orderId} оплачен. Список товаров:
      </p>

      <ul>${itemsList}</ul>
    </div>
    `;
}
