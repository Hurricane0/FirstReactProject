// import React from "react";
import {
  updateNewMessageActionCreator,
  sendMessageActionCreator
} from "../../../redux/dialogsReducer";
import Chat from "./Chat";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    userMessages: state.dialogsPage.userMessages,
    newMessageText: state.dialogsPage.newMessageText
  };
};
let mapDispatchToProps = dispatch => {
  return {
    messageTextSynchronization: inputText => {
      dispatch(updateNewMessageActionCreator(inputText));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
