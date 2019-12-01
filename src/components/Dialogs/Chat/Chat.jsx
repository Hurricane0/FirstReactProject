import React from "react";
import s from "./Chat.module.css";

function Chat() {
  let usersMessages = [
    { id: 1, message: "I am Nikita Dvortsov" },
    { id: 2, message: "I am Sonya Gurina" },
    { id: 3, message: "I am Dasha Dvortsova" }
  ];
  let chat = usersMessages.map(user => (
    <div className={s.dialogsContent}>{user.message}</div>
  ));

  return <div>{chat}</div>;
}

export default Chat;
