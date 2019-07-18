import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="navigation">
      <div className="logo">
        <NavLink to="/" exact>
          <img alt="hello" className="logoImage" src={Logo} />
        </NavLink>
      </div>
      <NavLink to="/user-profile">
        <div className="userProfile">
          {props.LoggedUser ? <img
            className="userImage"
            src={props.user.profile_image}
            alt="user logo"
          /> : null}
          <p className="userName">{props.LoggedUser ? props.user.name : null} <button className="logoutStyle"
            onClick={props.LoggedUser ? props.logOut : props.logIn}>{props.LoggedUser ? "Wyloguj" : "Zaloguj się"}</button></p>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
