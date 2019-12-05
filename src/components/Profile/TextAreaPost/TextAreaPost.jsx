import React from "react";
import s from "./TextAreaPost.module.css";

function TextAreaPost(props) {
  let textareaRef = React.createRef();
  let addPost = () => {
    let postText = textareaRef.current.value;
    props.addPost(postText);
    textareaRef.current.value = ""; //
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
        />
      </div>
      <div className={s.postButtonDiv}>
        <button onClick={addPost}>Post</button>
      </div>
    </div>
  );
}

export default TextAreaPost;

// let textareaRef = React.createRef();
// let addPost = () => {
//   let postText = textareaRef.current.value;
//   alert(postText);
// };
