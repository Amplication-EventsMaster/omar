import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { Transaction } from "../transaction/Transaction";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  paymentMethods?: Array<PaymentMethod>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string | null;
};
