import React from "react";
import s from "./Header.module.css"; //Созданние класса для использования компонентного CSS
function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul>
          <a href="#f">
            <li>Home</li>
          </a>
          <a href="#f">
            <li>Posts</li>
          </a>
          <a href="#f">
            <li>Settings</li>
          </a>
          <a href="#f">
            <li>About</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
