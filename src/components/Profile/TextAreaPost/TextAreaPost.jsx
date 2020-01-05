import React from "react";
import s from "./TextAreaPost.module.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utilities/validators";
import { Textarea } from "../../common/FormsControl/FormsControl";

const maxLength = maxLengthCreator(10);

let TextAreaPost = props => {
  return (
    <div className={s.wrapper}>
      <form onSubmit={props.handleSubmit}>
        <hr />
        <div className={s.textareaWrapper}>
          <Field
            component={Textarea}
            validate={[required, maxLength]}
            name="postText"
            className={s.textarea}
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
