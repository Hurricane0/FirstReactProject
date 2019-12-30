import React from "react";
import s from "./LoginedUserInfo.module.css";
import defaultAvatar from "../../../assets/images/undefinedUserAvatar.png";

let LoginedUserInfo = props => {
  return (
    <div className={s.wrapper}>
      <img src={defaultAvatar} alt="Your Avatar" />
      <span>{props.username}</span>
    </div>
  );
};

export default LoginedUserInfo;
