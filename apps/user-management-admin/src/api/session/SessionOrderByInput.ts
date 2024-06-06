import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  expiryTime?: SortOrder;
  id?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
