import { PaymentMethodUpdateManyWithoutUsersInput } from "./PaymentMethodUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  paymentMethods?: PaymentMethodUpdateManyWithoutUsersInput;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string | null;
};
