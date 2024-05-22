import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  comment?: string | null;
  currency?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
