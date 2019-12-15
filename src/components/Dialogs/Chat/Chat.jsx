import React from "react";
import s from "./Chat.module.css";

function Chat(props) {
  let chat = props.userMessages.map(user => (
    <div className={s.dialogsContent}>{user.message}</div>
  ));
  let messageTextSynchronization = event => {
    props.messageTextSynchronization(event.target.value);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.chatting_block}>{chat}</div>
        <div className={s.textarea_block}>
          <textarea
            placeholder="Write a message..."
            className={s.textarea}
            value={props.newMessageText}
            onChange={messageTextSynchronization}
          ></textarea>
          <div className={s.button_block}>
            <button onClick={props.sendMessage} className={s.post_button}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
