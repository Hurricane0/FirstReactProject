// import React from "react";
import { sendMessage } from "../../../redux/dialogsReducer";
import Chat from "./Chat";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    userMessages: state.dialogsPage.userMessages
  };
};

const ChatContainer = connect(mapStateToProps, {
  sendMessage
})(Chat);

export default ChatContainer;
