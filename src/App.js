import React from "react";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/common/Login/Login";
function App() {
  return (
    <div className="container">
      <HeaderContainer />
      <div className="wrapper">
        <div className="main-content-wrapper">
          <Route path="/login" render={() => <Login />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </div>
  );
}

export default App;
