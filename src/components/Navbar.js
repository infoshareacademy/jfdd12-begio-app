import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
import UserLogo from "./userLogo.png";
import "./NavBar.css";
export const Navbar = () => {
  return (
    <nav>
      <div>
        <p style={{ marginTop: "18px" }}>
          {" "}
          <NavLink to="/" exact>
            <img alt="hello" className="logo" src={Logo} /> Start
          </NavLink>
        </p>

        <p>
          <NavLink to="/clock">
            <img alt="hello" className="UserLogo" src={UserLogo} />
            Profil
          </NavLink>
        </p>
      </div>
    </nav>
  );
};
