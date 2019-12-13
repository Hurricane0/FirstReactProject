import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import TextAreaPost from "./TextAreaPost";

function TextAreaPostContainer(props) {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let inputSynchronization = inputText => {
    props.dispatch(updateNewPostTextActionCreator(inputText));
  };

  return (
    <TextAreaPost
      addPost={addPost}
      inputSynchronization={inputSynchronization}
      newPostText={props.newPostText}
    />
  );
}

export default TextAreaPostContainer;
