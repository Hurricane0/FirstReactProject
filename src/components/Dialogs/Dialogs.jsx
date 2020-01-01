import React, { Fragment } from "react";
import ChatContainer from "./Chat/ChatContainer";
import s from "./Dialogs.module.css";
import DialogsListContainer from "./DialogsList/DialogsListContainer";

function Dialogs() {
  return (
    <Fragment>
      <div className={s.dialogsWrapper}>
        <div className={s.dialogsList}>
          <DialogsListContainer />
        </div>
        <div className={s.dialogsContent}>
          <ChatContainer />
        </div>
      </div>
    </Fragment>
  );
}

export default Dialogs;
