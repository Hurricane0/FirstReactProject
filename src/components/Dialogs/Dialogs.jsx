import React from "react";
import s from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import DialogsList from "./DialogsList/DialogsList";

function Dialogs() {
  return (
    <div className={s.dialogsWrapper}>
      {/* Dialogs List */}
      <div className={s.dialogsList}>
        <DialogsList />
      </div>
      {/* Dialogs Content */}
      <div className={s.dialogsContent}>
        <Chat />
      </div>
    </div>
  );
}

export default Dialogs;
