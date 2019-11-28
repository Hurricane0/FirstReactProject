import React from "react";
import s from "./Dialogs.module.css";
import UserDialog from "./UserDialog/UserDialog";

function Dialogs() {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogsList}>
        <UserDialog />
        <UserDialog />
        <UserDialog />
      </div>
      <div className={s.dialogsContent}>Chat with your friend</div>
    </div>
  );
}

export default Dialogs;
