import React from "react";
import s from "./Profile.module.css";
import Post from "./Post/Post";
import TextAreaPost from "./TextAreaPost/TextAreaPost";
import Preloader from "../common/Prealoader/Prealoader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ profile, posts, addPostAC, userStatus, updateUserStatus }) {
  if (!profile) {
    return <Preloader />;
  }
  let newPost = posts.map(post => (
    <Post
      key={post.id}
      userAvatar={profile.photos.small}
      postText={post.postText}
      id={post.id}
    />
  ));
  let addPost = textareaData => {
    addPostAC(textareaData.postText);
  };
  return (
    <div className={s.wrapper}>
      <ProfileInfo
        profile={profile}
        userStatus={userStatus}
        updateUserStatus={updateUserStatus}
      />
      <div>
        <TextAreaPost onSubmit={addPost} />
        {newPost}
      </div>
    </div>
  );
}

export default Profile;
