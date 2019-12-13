import React from "react";
import s from "./Profile.module.css";
import Post from "./Post/Post";
import TextAreaPostContainer from "./TextAreaPost/TextAreaPostContainer";

function Profile(props) {
  let newPost = props.profilePage.posts.map(post => (
    <Post postText={post.postText} id={post.id} />
  ));
  return (
    <div className={s.wrapper}>
      <div>
        <TextAreaPostContainer
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
        />
        {newPost}
      </div>
    </div>
  );
}

export default Profile;
