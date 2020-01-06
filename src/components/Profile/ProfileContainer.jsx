import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  addPostAC,
  getUserStatus,
  setCurrentProflieThunk,
  updateUserStatus
} from "../../redux/profileReducer";
import Profile from "./Profile";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) this.props.history.push("/login");
    }
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
    userStatus: state.profilePage.userStatus,
    autorizedUserId: state.auth.userId
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
