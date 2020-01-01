import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { setCurrentProflieThunk } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.setCurrentProflieThunk(userId);
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainer = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { setCurrentProflieThunk })(
  WithUrlDataContainer
);
