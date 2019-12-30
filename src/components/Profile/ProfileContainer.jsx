import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import * as axios from "axios";
import { setCurrentProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log(userId);
    if (!userId) {
      userId = 2;
    }
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then(response => {
        this.props.setCurrentProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
  };
};

let WithUrlDataContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setCurrentProfile })(
  WithUrlDataContainer
);
