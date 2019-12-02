import React from "react";
import s from "./Profile.module.css"; //Созданние класса для использования компонентного CSS
import Post from "./Post/Post";
import TextAreaPost from "./TextAreaPost/TextAreaPost";

function Profile() {
  return (
    <div className={s.wrapper}>
      <div>
        <TextAreaPost />
        <Post message="Hello its first message!)" />
        <Post message="Good evening! What`s up, Guys?" />
      </div>
    </div>
  );
}

export default Profile;
