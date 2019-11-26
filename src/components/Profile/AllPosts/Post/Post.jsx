import React from "react";
import s from "./Post.module.css";

function Post() {
  return (
    <div className={s.post}>
      <img
        src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
        alt="avatar"
      />
      <span>Hello World!</span>
    </div>
  );
}

export default Post;
