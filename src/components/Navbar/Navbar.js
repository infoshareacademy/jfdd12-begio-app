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
        <NavLink activeClassName="activeNavlink" exact to="/">
          <img alt="hello" className="logoImage" src={Logo} />
        </NavLink>
      </div>

      {loggedUser ? (
        <>
          <NavLink activeClassName="activeNavlink" to="/user-profile">
            <div className="userProfile">
              <img
                className="userImage"
                src= {`https://api.adorable.io/avatars/285/${props.user.name}.png`}
                alt="user logo"
              />
              <p className="userName">{props.user.name} </p>
            </div>
          </NavLink>
          <p className="userName">
            <NavLink activeClassName="activeNavlink" to="/" exact>
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
