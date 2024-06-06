import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
  SelectInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="autoLogoutTime" source="autoLogoutTime" />
        <NumberInput
          step={1}
          label="autoLogoutTime_custom"
          source="autoLogoutTimeCustom"
        />
        <NumberInput
          step={1}
          label="autoUnblockTime"
          source="autoUnblockTime"
        />
        <NumberInput
          step={1}
          label="autoUnblockTime_custom"
          source="autoUnblockTimeCustom"
        />
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="comment_custom" multiline source="commentCustom" />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput
          step={1}
          label="expiryDaysNotification"
          source="expiryDaysNotification"
        />
        <NumberInput
          step={1}
          label="expiryDaysNotification_custom"
          source="expiryDaysNotificationCustom"
        />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput
          step={1}
          label="numberOfAttempts"
          source="numberOfAttempts"
        />
        <NumberInput
          step={1}
          label="numberOfAttempts_custom"
          source="numberOfAttemptsCustom"
        />
        <PasswordInput label="Password" source="password" />
        <NumberInput step={1} label="passwordExpiry" source="passwordExpiry" />
        <NumberInput
          step={1}
          label="passwordExpiry_custom"
          source="passwordExpiryCustom"
        />
        <TextInput label="password_text" source="passwordText" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="userLevel"
          label="userLevel"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="userLevelCustomized"
          label="userLevel_customized"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <TextInput label="userName" source="userName" />
        <TextInput label="username_custom" source="usernameCustom" />
      </SimpleForm>
    </Create>
  );
};
