import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
//Если по кличу на стрраничку нужен редирект на Логин страницу, то просто оборачиваем
//компонент, который не должен отобразиться, в withAuthRedirect(Component)

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
export const withAuthRedirect = Component => {
  let RedirectComponent = props => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectedRedirectComponent;
};
