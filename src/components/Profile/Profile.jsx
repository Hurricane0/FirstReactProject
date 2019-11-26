import React from "react";
import s from "./Profile.module.css"; //Созданние класса для использования компонентного CSS
import Post from "./AllPosts/Post/Post";
function Profile() {
  return (
    <div className={s.content}>
      <div>Image + Description</div>
      <div>
        My Posts
        <div>New posts</div>
        <Post message="Hello its first message!)" />
        <Post message="Good evening! What`s up, Guys?" />
      </div>
    </div>
  );
}

export default Profile;
