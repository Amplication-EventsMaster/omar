import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  comment: string | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
