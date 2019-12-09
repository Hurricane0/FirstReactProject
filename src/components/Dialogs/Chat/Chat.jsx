import React from "react";
import s from "./Chat.module.css";
import {
  updateNewMessageActionCreator,
  sendMessageActionCreator
} from "../../../redux/store";

function Chat(props) {
  let chat = props.dialogsPage.userMessages.map(user => (
    <div className={s.dialogsContent}>{user.message}</div>
  ));
  let updateNewMessage = event => {
    props.dispatch(updateNewMessageActionCreator(event.target.value));
  };
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.chatting_block}>{chat}</div>
        <div className={s.textarea_block}>
          <textarea
            placeholder="Write a message..."
            className={s.textarea}
            value={props.dialogsPage.newMessageText}
            onChange={updateNewMessage}
          ></textarea>
          <div className={s.button_block}>
            <button onClick={sendMessage} className={s.post_button}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
