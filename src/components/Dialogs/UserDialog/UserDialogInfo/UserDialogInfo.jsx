import React from "react";
import s from "./UserDialogInfo.module.css";

function UserDialogInfo() {
  return (
    <div className={s.userDialogInfoWrapper}>
      <h5>Nikita Dvortsov</h5>
      <p>new messages</p>
      <span>22:47</span>
    </div>
  );
}

export default UserDialogInfo;
