import React from "react";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, withRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/common/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initialize } from "./redux/appReducer";
import Preloader from "./components/common/Prealoader/Prealoader";
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.isInitialized) {
      return <Preloader />;
    }
    return (
      <div className="container">
        <HeaderContainer />
        <div className="wrapper">
          <div className="main-content-wrapper">
            <Route path="/login" render={() => <Login />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/messages" render={() => <DialogsContainer />} />
            <React.Suspense fallback={<Preloader />}>
              <Route path="/users" render={() => <UsersContainer />} />
            </React.Suspense>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isInitialized: state.app.isInitialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);
