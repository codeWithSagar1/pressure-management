import { User } from "../user/User";

export type Session = {
  createdAt: Date;
  expiryTime: Date | null;
  id: string;
  sessionId: string | null;
  updatedAt: Date;
  user?: User | null;
};
