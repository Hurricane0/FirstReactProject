import React, { Fragment } from "react";
import s from "./Dialogs.module.css";
import ChatContainer from "./Chat/ChatContainer";
import DialogsListContainer from "./DialogsList/DialogsListContainer";

function Dialogs() {
  return (
    <Fragment>
      <div className={s.dialogsWrapper}>
        {/* Dialogs List */}
        <div className={s.dialogsList}>
          <DialogsListContainer />
        </div>
        {/* Dialogs Content */}
        <div className={s.dialogsContent}>
          <ChatContainer />
        </div>
      </div>
    </Fragment>
  );
}

export default Dialogs;
