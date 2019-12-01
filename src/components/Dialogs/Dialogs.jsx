import React from "react";
import s from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import DialogsList from "./DialogsList/DialogsList";

function Dialogs(props) {
  return (
    <div className={s.dialogsWrapper}>
      {/* Dialogs List */}
      <div className={s.dialogsList}>
        <DialogsList state={props.state} />
      </div>
      {/* Dialogs Content */}
      <div className={s.dialogsContent}>
        <Chat state={props.state} />
      </div>
    </div>
  );
}

export default Dialogs;
