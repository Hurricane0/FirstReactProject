import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import s from "./Users.module.css";
import Preloader from "../common/Prealoader/Prealoader";
import { Redirect } from "react-router-dom";

let Users = props => {
  if (!props.isAuth) return <Redirect to="/login" />;
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
            followThunk={props.followThunk}
            unfollowThunk={props.unfollowThunk}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;
