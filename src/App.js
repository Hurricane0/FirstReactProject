import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <div className="main-content-wrapper">
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <Dialogs />} />
        </div>
      </div>
    </div>
  );
}

export default App;
