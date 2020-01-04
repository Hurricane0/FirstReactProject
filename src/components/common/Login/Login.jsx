import React from "react";
import s from "./Login.module.css";
import fs from "./LoginForm.module.css";
import { reduxForm, Field } from "redux-form";

let Login = () => {
  let onSubmit = formData => {
    console.log(formData);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.inside_wrapper}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={fs.wrapper}>
      <div>
        <Field component={"input"} name={"userLogin"} placeholder={"login"} />
      </div>
      <div>
        <Field component={"input"} name={"password"} placeholder={"password"} />
      </div>
      <div>
        <Field
          component={"input"}
          name={"rememberMe"}
          className={fs.checkbox}
          type="checkbox"
        />
        Remember Me
      </div>
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export default Login;
