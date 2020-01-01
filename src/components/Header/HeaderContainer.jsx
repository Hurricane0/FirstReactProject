import React from "react";
import { connect } from "react-redux";
import { authMeThunk, setUserData } from "../../redux/authReducer";
import Header from "./Header";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunk();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  username: state.auth.login
});

export default connect(mapStateToProps, { setUserData, authMeThunk })(
  HeaderContainer
);
