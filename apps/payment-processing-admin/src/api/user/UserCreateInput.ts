import { PaymentMethodCreateNestedManyWithoutUsersInput } from "./PaymentMethodCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  paymentMethods?: PaymentMethodCreateNestedManyWithoutUsersInput;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
