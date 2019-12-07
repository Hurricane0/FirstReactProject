import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="wrapper">
          <div className="main-content-wrapper">
            <Route
              path="/profile"
              render={() => (
                <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              )}
            />
            <Route
              path="/messages"
              render={() => <Dialogs dialogsPage={props.state.dialogsPage} />}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
