import React from "react";
import s from "./Profile.module.css"; //Созданние класса для использования компонентного CSS
import Post from "./Post/Post";
import TextAreaPost from "./TextAreaPost/TextAreaPost";

function Profile(props) {
  let newPost = props.state.posts.map(post => (
    <Post postText={post.postText} id={post.id} />
  ));
  return (
    <div className={s.wrapper}>
      <div>
        <TextAreaPost addPost={props.addPost} />
        {newPost}
      </div>
    </div>
  );
}

export default Profile;
