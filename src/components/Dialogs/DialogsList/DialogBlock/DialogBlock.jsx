import React from "react";
import s from "./DialogBlock.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";
import UserDialogInfo from "./UserDialogInfo/UserDialogInfo";
import { NavLink } from "react-router-dom";

function DialogBlock(props) {
  return (
    <NavLink to={`/messages/${props.id}`}>
      <div className={s.userDialogWrapper}>
        <UserAvatar />
        <UserDialogInfo username={props.username} />
      </div>
    </NavLink>
  );
}

export default DialogBlock;
