import React from "react";
import s from "./UserDialog.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";
import UserDialogInfo from "./UserDialogInfo/UserDialogInfo";
import { NavLink } from "react-router-dom";

function UserDialog() {
  return (
    <NavLink to="/messages/user-chat">
      <div className={s.userDialogWrapper}>
        <UserAvatar />
        <UserDialogInfo />
      </div>
    </NavLink>
  );
}

export default UserDialog;
