import React from "react";
import s from "./Profile.module.css"; //Созданние класса для использования компонентного CSS
import Post from "./AllPosts/Post/Post";
function Profile() {
  return (
    <div className={s.content}>
      <img
        src="https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png"
        alt="contentImage"
      />
      <div>Image + Description</div>
      <div>
        My Posts
        <div>New posts</div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Profile;
