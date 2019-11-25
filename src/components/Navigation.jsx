import React from "react";
import "./Navigation.css";
function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <a href="#f">
          <li>Main</li>
        </a>
        <a href="#f">
          <li>Portfolio</li>
        </a>
        <a href="#f">
          <li>About</li>
        </a>
        <a href="#f">
          <li>More</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navigation;
