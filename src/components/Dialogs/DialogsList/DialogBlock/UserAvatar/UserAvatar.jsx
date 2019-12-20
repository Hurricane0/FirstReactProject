import React from "react";
import s from "./UserAvatar.module.css";

function UserAvatar() {
  return (
    <div className={s.userAvatarWrapper}>
      <img
        className={s.avatar}
        src="https://i7.pngguru.com/preview/340/946/334/avatar-user-computer-icons-software-developer-avatar-thumbnail.jpg"
        alt="useravatar"
      />
    </div>
  );
}

export default UserAvatar;
