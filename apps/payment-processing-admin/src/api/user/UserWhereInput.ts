import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentMethodListRelationFilter } from "../paymentMethod/PaymentMethodListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  paymentMethods?: PaymentMethodListRelationFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringNullableFilter;
};
