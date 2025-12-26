export interface YokassaPaymentData {
  id: string;
  status: string;
  paid: boolean;
  amount: Amount;
  confirmation: Confirmation;
  created_at: string;
  description: string;
  metadata: YoKassaMetdata;
  recipient: Recipient;
  refundable: boolean;
  test: boolean;
}
export interface Amount {
  value: string;
  currency: string;
}

export interface Confirmation {
  type: string;
  confirmation_url: string;
}
export interface Recipient {
  account_id: "100500";
  gateway_id: "100700";
}

export interface YoKassaMetdata {
  order_id: string;
}

export interface CallbackPaymnetData {
  type: string;
  event: string;
  object: {
    id: string;
    status: string;
    amount: Amount;
    income_amount: Amount;
    description: string;
    recipient: {
      account_id: string;
      gateaway_id: string;
    };

    payment_method: {
      type: string;
      id: string;
      saved: boolean;
      title: string;
    };
    captured_at: string;
    created_at: string;

    test: boolean;
    refunded_amount: Amount;
    paid: boolean;
    refundable: true;
    metadata: YoKassaMetdata;
    authorization_details: {
      rrn: string;
      auth_code: string;
    };
  };
}
