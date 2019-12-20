import React from "react";
import UserBlock from "./UserBlock/UserBlock";

let Users = props => {
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <UserBlock
            user={user}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;
