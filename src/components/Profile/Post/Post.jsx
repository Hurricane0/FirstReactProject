import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.post}>
      {props.userAvatar === null ? (
        <img
          src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
          alt="avatar"
        />
      ) : (
        <img src={props.userAvatar} alt="avatar" />
      )}
      <p>{props.postText}</p>
    </div>
  );
}

export default Post;
// "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
