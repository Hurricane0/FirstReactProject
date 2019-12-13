import React from "react";
import {
  updateNewMessageActionCreator,
  sendMessageActionCreator
} from "../../../redux/dialogsReducer";
import Chat from "./Chat";
// import {
//   updateNewMessageActionCreator,
//   sendMessageActionCreator
// } from "../../../redux/store";

function ChatContainer(props) {
  let updateNewMessage = event => {
    props.dispatch(updateNewMessageActionCreator(event.target.value));
  };
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <Chat
      userMessages={props.dialogsPage.userMessages}
      messageTextSynchronization={updateNewMessage}
      newMessageText={props.newMessageText}
      sendMessage={sendMessage}
    />
  );
}

export default ChatContainer;
