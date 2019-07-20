import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { useAuth } from "../../hooks/useAuth";

const Navbar = props => {
  const loggedUser = useAuth();
  return (
    <nav className="navigation">
      <div className="logo">
        <NavLink to="/" exact>
          <img alt="hello" className="logoImage" src={Logo} />
        </NavLink>
      </div>

      {loggedUser ? (
        <>
          <NavLink to="/user-profile">
            <div className="userProfile">
              <img
                className="userImage"
                src={props.user.profile_image}
                alt="user logo"
              />
              <p className="userName">{props.user.name} </p>
            </div>
          </NavLink>
          <p className="userName">
            <NavLink to="/" exact>
              <button className="logoutStyle" onClick={props.logOut}>
                Wyloguj się
              </button>
            </NavLink>
          </p>
        </>
      ) : (
          <div className="userProfile">
            <p className="userName">
              <NavLink to="/login" exact>
                <button className="loginStyle">Zaloguj się</button>
              </NavLink>
            </p>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
