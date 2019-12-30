// import React from "react";
import {
  messageTextSynchronization,
  sendMessage
} from "../../../redux/dialogsReducer";
import Chat from "./Chat";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    userMessages: state.dialogsPage.userMessages,
    newMessageText: state.dialogsPage.newMessageText
  };
};

const ChatContainer = connect(mapStateToProps, 
  {
    messageTextSynchronization,
    sendMessage
  })(Chat);

export default ChatContainer;
