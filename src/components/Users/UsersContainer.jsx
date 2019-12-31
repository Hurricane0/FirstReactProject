import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import {
  follow,
  setCurrentPage,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleInFollowingProcess
} from "../../redux/usersReducer";
import Users from "./Users";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  }
  onPageChanged = newPage => {
    this.props.setCurrentPage(newPage);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(newPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleIsFetching={this.toggleIsFetching}
        isFetching={this.props.isFetching}
        inFollowingProcess={this.props.inFollowingProcess}
        toggleInFollowingProcess={this.props.toggleInFollowingProcess}
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
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  toggleIsFetching,
  toggleInFollowingProcess
})(UsersContainer);
