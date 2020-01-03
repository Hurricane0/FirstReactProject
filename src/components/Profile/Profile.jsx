import React from "react";
import s from "./Profile.module.css";
import Post from "./Post/Post";
import TextAreaPostContainer from "./TextAreaPost/TextAreaPostContainer";
import Preloader from "../common/Prealoader/Prealoader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  let newPost = props.posts.map(post => (
    <Post
      userAvatar={props.profile.photos.small}
      postText={post.postText}
      id={post.id}
    />
  ));
  return (
    <div className={s.wrapper}>
      <ProfileInfo
        profile={props.profile}
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
      />
      <div>
        <TextAreaPostContainer />
        {newPost}
      </div>
    </div>
  );
}

export default Profile;
