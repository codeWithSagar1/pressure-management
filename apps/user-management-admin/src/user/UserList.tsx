import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="autoLogoutTime" source="autoLogoutTime" />
        <TextField
          label="autoLogoutTime_custom"
          source="autoLogoutTimeCustom"
        />
        <TextField label="autoUnblockTime" source="autoUnblockTime" />
        <TextField
          label="autoUnblockTime_custom"
          source="autoUnblockTimeCustom"
        />
        <TextField label="comment" source="comment" />
        <TextField label="comment_custom" source="commentCustom" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField
          label="expiryDaysNotification"
          source="expiryDaysNotification"
        />
        <TextField
          label="expiryDaysNotification_custom"
          source="expiryDaysNotificationCustom"
        />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="numberOfAttempts" source="numberOfAttempts" />
        <TextField
          label="numberOfAttempts_custom"
          source="numberOfAttemptsCustom"
        />
        <TextField label="passwordExpiry" source="passwordExpiry" />
        <TextField
          label="passwordExpiry_custom"
          source="passwordExpiryCustom"
        />
        <TextField label="password_text" source="passwordText" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userLevel" source="userLevel" />
        <TextField label="userLevel_customized" source="userLevelCustomized" />
        <TextField label="Username" source="username" />
        <TextField label="userName" source="userName" />
        <TextField label="username_custom" source="usernameCustom" />
      </Datagrid>
    </List>
  );
};
