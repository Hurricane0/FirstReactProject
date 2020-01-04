import React from "react";
import s from "./Chat.module.css";
import { reduxForm, Field } from "redux-form";

function Chat(props) {
  let chat = props.userMessages.map(user => (
    <div key={user.id} className={s.dialogsContent}>
      {user.message}
    </div>
  ));
  let sendMessage = messageData => {
    props.sendMessage(messageData.messageText);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.chatting_block}>{chat}</div>
        <ChatTextArea onSubmit={sendMessage} />
      </div>
    </div>
  );
}
let ChatTextArea = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textarea_block}>
        <Field
          placeholder="Write a message..."
          className={s.textarea}
          component="textarea"
          name="messageText"
        ></Field>
        <div className={s.button_block}>
          <button className={s.post_button}>Send</button>
        </div>
      </div>
    </form>
  );
};

ChatTextArea = reduxForm({ form: "DialogsForm" })(ChatTextArea);

export default Chat;
