import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  follow,
  followThunk,
  getUsersThunk,
  setCurrentPageUsersThunk,
  toggleInFollowingProcess,
  toggleIsFetching,
  unfollow,
  unfollowThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import {
  selectPageSize,
  selectTotalUsersCount,
  selectCurrentPage,
  selectInFollowingProcess,
  selectIsFetching,
  superSelectUsers
} from "../../redux/selectors/users-selectors";
import Preloader from "../common/Prealoader/Prealoader";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = newPage => {
    this.props.setCurrentPageUsersThunk(newPage, this.props.pageSize);
  };
  render() {
    if (!this.props.totalUsersCount || this.props.isFetching) {
      return <Preloader />;
    }
    return <Users {...this.props} onPageChanged={this.onPageChanged} />;
  }
}
const mapStateToProps = state => {
  return {
    users: superSelectUsers(state), //Reselect functionality
    totalUsersCount: selectTotalUsersCount(state),
    pageSize: selectPageSize(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    inFollowingProcess: selectInFollowingProcess(state)
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
  })
)(UsersContainer);
