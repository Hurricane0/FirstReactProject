import React from "react";
import Preloader from "../common/Prealoader/Prealoader";
import UserBlock from "./UserBlock/UserBlock";
import s from "./Users.module.css";

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
            user={user}
            followThunk={props.followThunk}
            unfollowThunk={props.unfollowThunk}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;
