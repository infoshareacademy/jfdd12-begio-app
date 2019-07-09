import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
export const Navbar = props => {
  return (
    <nav
      style={{
        backgroundColor: "#EEE",
        height: "100px",
        width: "100%",
        fontSize: "2em"
      }}
    >
      <ul
        style={{
          marginTop: 0,
          display: "flex",
          listStyleType: "none"
        }}
      >
        <li>
          <img src={Logo} />
          <NavLink
            exact
            className={"default-link"}
            activeClassName={"active-link"}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className={"default-link"}
            activeClassName={"active-link"}
            to="/callender"
          >
            Todo app
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
