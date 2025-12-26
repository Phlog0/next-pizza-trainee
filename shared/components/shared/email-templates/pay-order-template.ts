export interface PayOrderTemplateProps {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export function PayOrderTemplate({
  orderId,
  totalAmount,
  paymentUrl,
}: PayOrderTemplateProps) {
  return `
    <div>
      <h1>Заказ № ${orderId} </h1>
      <p>Оплатите сумму ${totalAmount} ₽</p>
      <p>
        Перейдите по <a href=${paymentUrl}>этой ссылке</a> для оплаты заказа
      </p>
    </div>
    `;
}
