import React from "react";
import s from "./TextAreaPost.module.css";

function TextAreaPost() {
  let textareaRef = React.createRef();
  let addPost = () => {
    let postText = textareaRef.current.value;
    alert(postText);
  };
  return (
    <div className={s.wrapper}>
      <hr />
      <div class={s.textareaWrapper}>
        <textarea
          name="textAreaPost"
          id="textAreaPost"
          maxlength="300"
          placeholder="Post something..."
          autofocus
          ref={textareaRef}
        ></textarea>
      </div>
      <div className={s.postButtonDiv}>
        <button onClick={addPost}>Post</button>
      </div>
    </div>
  );
}

export default TextAreaPost;
