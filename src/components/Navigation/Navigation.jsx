import React from "react";
import s from "./Navigation.module.css"; //Созданние класса для использования компонентного CSS

function Navigation() {
  return (
    <nav className={s.nav}>
      <ul>
        <a href="#f">
          <li className={s.item}>Main</li>
        </a>
        <a href="#f">
          <li className={s.item}>Portfolio</li>
        </a>
        <a href="#f">
          <li className={s.item}>About</li>
        </a>
        <a href="#f">
          <li className={s.item}>More</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navigation;
