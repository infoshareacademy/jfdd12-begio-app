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
          <img
            className="userImage"
            src={props.user.profile_image}
            alt="user logo"
          />
          <p className="userName">{props.user.name}</p>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
