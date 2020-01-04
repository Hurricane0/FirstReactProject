import React from "react";
import s from "./Post.module.css";
import undefinedUserAvatar from "../../../assets/images/undefinedUserAvatar.png";

function Post(props) {
  return (
    <div className={s.post}>
      {props.userAvatar === null ? (
        <img
          className={s.undefinedUserAvatar}
          src={undefinedUserAvatar}
          alt="avatar"
        />
      ) : (
        <img src={props.userAvatar} alt="avatar" />
      )}
      <p>{props.postText}</p>
    </div>
  );
}

export default Post;
