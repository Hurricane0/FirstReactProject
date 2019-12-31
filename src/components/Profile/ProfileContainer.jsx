import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";
import { setCurrentProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileAPI.getProfile(userId).then(data => {
      this.props.setCurrentProfile(data);
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    personalUserId: state.auth.userId
  };
};

let WithUrlDataContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setCurrentProfile })(
  WithUrlDataContainer
);
