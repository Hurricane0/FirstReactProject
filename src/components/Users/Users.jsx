import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import s from "./Users.module.css";
import Preloader from "../common/Prealoader/Prealoader";

let Users = props => {
  return (
    <div>
      {props.isFetching && <Preloader />}
      <div className={s.pagesNumbersBlock}>
        {props.pages.map(page => {
          return (
            <span
              className={props.currentPage === page && s.selectedPage}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id}>
          <UserBlock
            inFollowingProcess={props.inFollowingProcess}
            toggleInFollowingProcess={props.toggleInFollowingProcess}
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
