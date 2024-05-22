import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "comment";

export const TransactionTitle = (record: TTransaction): string => {
  return record.comment?.toString() || String(record.id);
};
