import React from "react";
import s from "./TextAreaPost.module.css";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from "../../../redux/store";

function TextAreaPost(props) {
  let textareaRef = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let textareaInputFunc = () => {
    let inputText = textareaRef.current.value;
    props.dispatch(updateNewPostTextActionCreator(inputText));
  };

  return (
    <div className={s.wrapper}>
      <hr />
      <div className={s.textareaWrapper}>
        <textarea
          className={s.textarea}
          maxLength="600"
          placeholder="Post something..."
          ref={textareaRef}
          value={props.newPostText}
          onChange={textareaInputFunc}
        />
      </div>
      <div className={s.postButtonDiv}>
        <button onClick={addPost}>Post</button>
      </div>
    </div>
  );
}

export default TextAreaPost;
