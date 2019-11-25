import React from "react";
import "./Profile.css";
function Profile() {
  return (
    <div className="content">
      <img
        src="https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png"
        alt="contentImage"
      />
      <div>Image + Description</div>
      <div>
        My Posts
        <div>New posts</div>
        <div className="posts">
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
