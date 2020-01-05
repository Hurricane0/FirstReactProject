import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login } from "../../../redux/authReducer";
import { maxLengthCreator, required } from "../../../utilities/validators";
import { Input } from "../FormsControl/FormsControl";
import s from "./Login.module.css";
import fs from "./LoginForm.module.css";
import { Redirect } from "react-router-dom";
const maxLength = maxLengthCreator(25);
let Login = props => {
  let login = formData => {
    props.login(formData.userLogin, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.inside_wrapper}>
        <h1>Login</h1>
        <LoginForm onSubmit={login} />
      </div>
    </div>
  );
};

let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={fs.wrapper}>
      <div>
        <Field
          component={Input}
          name={"userLogin"}
          placeholder={"login"}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          placeholder={"password"}
          validate={[required, maxLength]}
          type="password"
        />
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

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

LoginForm = reduxForm({
  form: "login"
})(LoginForm);
export default connect(mapStateToProps, { login })(Login);
