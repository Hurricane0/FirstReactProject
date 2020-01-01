import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import ChatContainer from "./Chat/ChatContainer";
import s from "./Dialogs.module.css";
import DialogsListContainer from "./DialogsList/DialogsListContainer";

function Dialogs(props) {
  if (!props.isAuth) return <Redirect to="/login" />;
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
