import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  expiryTime?: Date | null;
  sessionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
