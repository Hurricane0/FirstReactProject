import React from "react";
import s from "./TextAreaPost.module.css";
import { reduxForm, Field } from "redux-form";

let TextAreaPost = props => {
  return (
    <div className={s.wrapper}>
      <form onSubmit={props.handleSubmit}>
        <hr />
        <div className={s.textareaWrapper}>
          <Field
            component="textarea"
            name="postText"
            className={s.textarea}
            maxLength="600"
            placeholder="Post something..."
          />
        </div>
        <div className={s.postButtonDiv}>
          <button onClick={props.addPost}>Post</button>
        </div>
      </form>
    </div>
  );
};
TextAreaPost = reduxForm({ form: "ProfilePostFrom" })(TextAreaPost);

export default TextAreaPost;
