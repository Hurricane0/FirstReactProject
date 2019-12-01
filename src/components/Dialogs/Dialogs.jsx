import React from "react";
import s from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import DialogsList from "./DialogsList/DialogsList";

function Dialogs(props) {
  return (
    <div className={s.dialogsWrapper}>
      {/* Dialogs List */}
      <div className={s.dialogsList}>
        <DialogsList user_dialogs={props.user_dialogs} />
      </div>
      {/* Dialogs Content */}
      <div className={s.dialogsContent}>
        <Chat user_messages={props.user_messages} />
      </div>
    </div>
  );
}

export default Dialogs;
