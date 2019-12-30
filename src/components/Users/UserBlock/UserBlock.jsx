import React from "react";
import s from "./UserBlock.module.css";
import undefinedUserAvatar from "../../../assets/images/undefinedUserAvatar.png";
import { NavLink } from "react-router-dom";

let UserBlock = props => {
  let unfollow = () => {
    props.unfollow(props.user.id);
  };
  let follow = () => {
    props.follow(props.user.id);
  };
  let followingButtonStyle = {
    backgroundColor: "#04D91B",
    boxShadow: "inset 0px -2px 1px #03a013, inset 0px 2px 2px #03a013"
  };
  let followButtonStyle = {
    backgroundColor: "#fec92d",
    boxShadow: "0px 2px 0px #cea321"
  };
  return (
    <div className={s.wrapper}>
      <div className={s.left_block}>
        {props.user.photos.small != null ? (
          <NavLink to={"/profile/" + props.user.id}>
            <img
              className={s.avatar}
              src={props.user.photos.small}
              alt="UserAvatar"
            />
          </NavLink>
        ) : (
          <NavLink to={"/profile/" + props.user.id}>
            <img
              className={s.avatar}
              src={undefinedUserAvatar}
              alt="UserAvatar"
            />
          </NavLink>
        )}

        {props.user.followed ? (
          <button
            key={props.user.id}
            onClick={unfollow}
            className={s.follow_button}
            style={followingButtonStyle}
          >
            Following
          </button>
        ) : (
          <button
            key={props.user.id}
            onClick={follow}
            className={s.follow_button}
            style={followButtonStyle}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.right_block}>
        <span className={s.username}>{props.user.name}</span>
        <span className={s.status}>Some status...</span>
        <span className={s.country}>Ukraine</span>
        <span className={s.city}>Kiev</span>
      </div>
    </div>
  );
};

export default UserBlock;
