import React from "react";
import s from "./Header.module.css"; //Созданние класса для использования компонентного CSS
function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png"
        alt="logo"
        height="55px"
      />
    </header>
  );
}

export default Header;
