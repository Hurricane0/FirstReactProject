import React from "react";
import undefinedUserAvatar from "../../../assets/images/undefinedUserAvatar.png";
import s from "./ProfileInfo.module.css";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const ProfileInfo = ({ profile, userStatus, updateUserStatus }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.inside_wrapper}>
        <div className={s.image_wrapper}>
          {!profile.photos.large ? (
            <img src={undefinedUserAvatar} alt="User Avatar" />
          ) : (
            <img src={profile.photos.large} alt="User Avatar" />
          )}
        </div>
        <div className={s.description}>
          <span className={s.username}>{profile.fullName}</span>
          <ProfileStatusHooks
            userStatus={userStatus}
            updateUserStatus={updateUserStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
