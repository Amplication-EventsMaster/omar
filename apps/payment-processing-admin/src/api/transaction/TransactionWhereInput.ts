import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  comment?: StringNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
