import React from "react";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Prealoader/Prealoader";
import UserBlock from "./UserBlock/UserBlock";

let Users = ({
  currentPage,
  onPageChanged,
  users,
  inFollowingProcess,
  followThunk,
  unfollowThunk,
  isFetching,
  pageSize,
  totalUsersCount
}) => {
  if (isFetching) {
    return <Preloader />;
  }

  return (
    <div>
      <Paginator
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {users.map(user => (
        <div key={user.id}>
          <UserBlock
            inFollowingProcess={inFollowingProcess}
            user={user}
            followThunk={followThunk}
            unfollowThunk={unfollowThunk}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;
