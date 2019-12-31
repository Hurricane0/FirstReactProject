import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setUserData } from "../../redux/authReducer";
import Header from "./Header";
class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.authMe().then(data => {
      let { id, login, email } = data.data;
      data.resultCode === 1
        ? this.props.setUserData(id, login, email, false)
        : this.props.setUserData(id, login, email, true);
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  username: state.auth.login
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
