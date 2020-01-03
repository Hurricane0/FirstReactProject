import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsersThunk,
  setCurrentPageUsersThunk,
  toggleInFollowingProcess,
  toggleIsFetching,
  unfollow,
  followThunk,
  unfollowThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = newPage => {
    this.props.setCurrentPageUsersThunk(newPage, this.props.pageSize);
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <Users
        pages={pages}
        pagesCount={pagesCount}
        {...this.props}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    inFollowingProcess: state.usersPage.inFollowingProcess
  };
};
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toggleIsFetching,
    toggleInFollowingProcess,
    getUsersThunk,
    setCurrentPageUsersThunk,
    followThunk,
    unfollowThunk
  }),
  withAuthRedirect
)(UsersContainer);
