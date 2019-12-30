import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className="container">
      <HeaderContainer />
      <div className="wrapper">
        <div className="main-content-wrapper">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <Dialogs />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </div>
  );
}

export default App;
