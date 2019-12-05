import React from "react";
import s from "./Chat.module.css";

function Chat(props) {
  let chat = props.dialogsPage.userMessages.map(user => (
    <div className={s.dialogsContent}>{user.message}</div>
  ));

  return <div>{chat}</div>;
}

export default Chat;
