import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  comment?: string | null;
  currency?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
