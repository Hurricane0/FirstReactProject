import React from "react";
import s from "./Chat.module.css";

function Chat(props) {
  debugger;
  let chat = props.state.userMessages.map(user => (
    <div className={s.dialogsContent}>{user.message}</div>
  ));

  return <div>{chat}</div>;
}

export default Chat;
