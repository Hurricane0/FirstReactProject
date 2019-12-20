import React from "react";
import s from "./UserBlock.module.css";

let UserBlock = props => {
  let unfollow = () => {
    props.unfollow(props.user.id);
  };
  let follow = () => {
    props.follow(props.user.id);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.left_block}>
        <img className={s.avatar} src={props.user.avatarUrl} alt="UserAvatar" />
        {props.user.followed ? (
          <button
            key={props.user.id}
            onClick={unfollow}
            className={s.follow_button}
          >
            Unfollow
          </button>
        ) : (
          <button
            key={props.user.id}
            onClick={follow}
            className={s.follow_button}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.right_block}>
        <span className={s.username}>{props.user.username}</span>
        <span className={s.status}>{props.user.status}</span>
        <span className={s.country}>{props.user.location.country}</span>
        <span className={s.city}>{props.user.location.city}</span>
      </div>
    </div>
  );
};

export default UserBlock;
