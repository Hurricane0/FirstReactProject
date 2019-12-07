import React from "react";
import s from "./TextAreaPost.module.css";

function TextAreaPost(props) {
  let textareaRef = React.createRef();
  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };
  let textareaInputFunc = () => {
    let inputText = textareaRef.current.value;
    props.dispatch({ type: "UPDATE-NEW-TEXTAREA-TEXT", newtext: inputText });
  };

  return (
    <div className={s.wrapper}>
      <hr />
      <div className={s.textareaWrapper}>
        <textarea
          name="textAreaPost"
          id="textAreaPost"
          maxLength="600"
          placeholder="Post something..."
          ref={textareaRef}
          value={props.textareaText}
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
