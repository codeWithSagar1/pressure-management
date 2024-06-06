import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  expiryTime?: Date | null;
  sessionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
