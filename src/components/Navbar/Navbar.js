import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Navbar.css"
import { useAuth } from "../../hooks/useAuth"

const Navbar = props => {
    const loggedUser = useAuth()
    return (
        <nav className="navigation">
            <div className="logo">
                <NavLink activeClassName="activeNavlink" exact to="/">
                    <img alt="hello" className="logoImage" src={Logo} />
                </NavLink>
            </div>

            {loggedUser ? (
                <div className="userNav">
                    <NavLink activeClassName="activeNavlink" to="/user-profile">
                        <div className="userProfile">
                            {props.name ? (
                                <img
                                    className="userImage"
                                    src={`https://api.adorable.io/avatars/285/${
                                        props.name
                                    }.png`}
                                    alt="user logo"
                                />
                            ) : null}
                            <p className="userName">{props.name} </p>
                        </div>
                    </NavLink>
                    <NavLink  to="/" exact>
                        <span className="logoutStyle" onClick={props.logOut}>
                            Wyloguj się
                        </span>
                    </NavLink>
                </div>
            ) : (
                <div className="userProfileLogOut">
                    <NavLink activeClassName="activeNavlink" to="/sign-up" exact>
                        <span className="signUpStyle">Utwórz konto</span>
                    </NavLink>
                    <NavLink activeClassName="activeNavlink" to="/login" exact>
                        <span className="loginStyle">Zaloguj się</span>
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default Navbar
