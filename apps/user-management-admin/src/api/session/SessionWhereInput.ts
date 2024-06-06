import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  expiryTime?: DateTimeNullableFilter;
  id?: StringFilter;
  sessionId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
