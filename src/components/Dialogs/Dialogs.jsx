import React, { Fragment } from "react";
import s from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import DialogsList from "./DialogsList/DialogsList";

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
          <Chat dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
        </div>
      </div>
    </Fragment>
  );
}

export default Dialogs;
