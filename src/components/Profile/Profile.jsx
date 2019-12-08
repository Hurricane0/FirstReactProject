import React from "react";
import s from "./Profile.module.css"; //Созданние класса для использования компонентного CSS
import Post from "./Post/Post";
import TextAreaPost from "./TextAreaPost/TextAreaPost";

function Profile(props) {
  let newPost = props.profilePage.posts.map(post => (
    <Post postText={post.postText} id={post.id} />
  ));
  return (
    <div className={s.wrapper}>
      <div>
        <TextAreaPost
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
        />
        {newPost}
      </div>
    </div>
  );
}

export default Profile;
