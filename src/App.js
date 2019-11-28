import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="wrapper">
          <div className="main-content-wrapper">
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Dialogs} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
