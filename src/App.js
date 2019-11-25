import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

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
