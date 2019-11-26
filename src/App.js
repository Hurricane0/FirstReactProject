import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
// import Profile from "./components/Profile";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Navigation />
        <Profile />
      </div>
    </div>
  );
}

export default App;
