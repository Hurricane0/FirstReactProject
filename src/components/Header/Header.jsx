import React from "react";
import s from "./Header.module.css"; //Созданние класса для использования компонентного CSS
import { NavLink } from "react-router-dom";
import LoginedUserInfo from "./LoginedUserInfo/LoginedUserInfo";
function Header(props) {
  return (
    <div className={s.header}>
      {props.isAuth ? (
        <LoginedUserInfo username={props.username} />
      ) : (
        <NavLink to="/login" className={s.auth}>
          Login
        </NavLink>
      )}
      <nav>
        <ul>
          <NavLink activeClassName={s.activeLink} to="/profile">
            <li>Profile</li>
          </NavLink>
          <NavLink activeClassName={s.activeLink} to="/messages">
            <li>Messages</li>
          </NavLink>
          <NavLink activeClassName={s.activeLink} to="/users">
            <li>Users</li>
          </NavLink>
          <NavLink activeClassName={s.activeLink} to="/settings">
            <li>Settings</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
