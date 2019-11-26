import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
// import Profile from "./components/Profile";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Profile />
      </div>
    </div>
  );
}

export default App;
