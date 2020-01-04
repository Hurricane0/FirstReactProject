import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  setCurrentProflieThunk,
  getUserStatus,
  updateUserStatus,
  addPostAC
} from "../../redux/profileReducer";
import Profile from "./Profile";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.setCurrentProflieThunk(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    personalUserId: state.auth.userId,
    userStatus: state.profilePage.userStatus
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentProflieThunk,
    getUserStatus,
    updateUserStatus,
    addPostAC
  }),
  withRouter
)(ProfileContainer);
