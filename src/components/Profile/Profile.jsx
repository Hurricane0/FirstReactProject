import React from "react";
import s from "./Profile.module.css";
import Post from "./Post/Post";
import TextAreaPost from "./TextAreaPost/TextAreaPost";
import Preloader from "../common/Prealoader/Prealoader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  let newPost = props.posts.map(post => (
    <Post
      key={post.id}
      userAvatar={props.profile.photos.small}
      postText={post.postText}
      id={post.id}
    />
  ));
  let addPost = textareaData => {
    props.addPostAC(textareaData.postText);
  };
  return (
    <div className={s.wrapper}>
      <ProfileInfo
        profile={props.profile}
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
      />
      <div>
        <TextAreaPost onSubmit={addPost} />
        {newPost}
      </div>
    </div>
  );
}

export default Profile;
