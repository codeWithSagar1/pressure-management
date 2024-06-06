import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  autoLogoutTime?: number | null;
  autoLogoutTimeCustom?: number | null;
  autoUnblockTime?: number | null;
  autoUnblockTimeCustom?: number | null;
  comment?: string | null;
  commentCustom?: string | null;
  email?: string | null;
  expiryDaysNotification?: number | null;
  expiryDaysNotificationCustom?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  numberOfAttempts?: number | null;
  numberOfAttemptsCustom?: number | null;
  password?: string;
  passwordExpiry?: number | null;
  passwordExpiryCustom?: number | null;
  passwordText?: string | null;
  roles?: InputJsonValue;
  sessions?: SessionUpdateManyWithoutUsersInput;
  userLevel?: "Option1" | null;
  userLevelCustomized?: "Option1" | null;
  username?: string;
  userName?: string | null;
  usernameCustom?: string | null;
};
