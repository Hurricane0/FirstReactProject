import React from "react";
import s from "./UserDialogInfo.module.css";

function UserDialogInfo(props) {
  // getting current time
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  ///////////////////////////////////////////////////////
  return (
    <div className={s.userDialogInfoWrapper}>
      <h5>{props.username}</h5>
      <p>new messages</p>
      <span>{time}</span>
    </div>
  );
}

export default UserDialogInfo;
