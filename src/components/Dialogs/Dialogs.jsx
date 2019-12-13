import React, { Fragment } from "react";
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import ChatContainer from "./Chat/ChatContainer";

function Dialogs(props) {
  return (
    <Fragment>
      <div className={s.dialogsWrapper}>
        {/* Dialogs List */}
        <div className={s.dialogsList}>
          <DialogsList dialogsPage={props.dialogsPage} />
        </div>
        {/* Dialogs Content */}
        <div className={s.dialogsContent}>
          <ChatContainer
            dialogsPage={props.dialogsPage}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Dialogs;
