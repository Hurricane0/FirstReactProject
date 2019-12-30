import React from "react";
import s from "./ProfileInfo.module.css";
import undefinedUserAvatar from "../../../assets/images/undefinedUserAvatar.png";

let ProfileInfo = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.inside_wrapper}>
        <div className={s.image_wrapper}>
          {!props.profile.photos.large ? (
            <img src={undefinedUserAvatar} alt="User Avatar" />
          ) : (
            <img src={props.profile.photos.large} alt="User Avatar" />
          )}
        </div>
        <div className={s.description}>
          <span className={s.username}>{props.profile.fullName}</span>
          <span className={s.about_user}>{props.profile.aboutMe}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
