import React from "react";
import s from "./TextAreaPost.module.css";

function TextAreaPost(props) {
  let textareaRef = React.createRef();

  let inputSynchronization = () => {
    let inputText = textareaRef.current.value;
    props.inputSynchronization(inputText);
  };

  return (
    <div className={s.wrapper}>
      <hr className={s.hr} />
      <div className={s.textareaWrapper}>
        <textarea
          className={s.textarea}
          maxLength="600"
          placeholder="Post something..."
          ref={textareaRef}
          value={props.newPostText}
          onChange={inputSynchronization}
        />
      </div>
      <div className={s.postButtonDiv}>
        <button onClick={props.addPost}>Post</button>
      </div>
    </div>
  );
}

export default TextAreaPost;
