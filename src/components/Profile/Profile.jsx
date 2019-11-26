import React from "react";
import s from "./Profile.module.css"; //Созданние класса для использования компонентного CSS
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
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
