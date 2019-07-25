import React from "react"
import { NavLink, Redirect } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Navbar.css"
import { useAuth } from "../../hooks/useAuth"
import { useUserName } from "../../hooks/useUserName"

const Navbar = props => {
    const loggedUser = useAuth()
    const name = useUserName()
    console.log(name)

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
                        {name ? (
                            <div className="userProfile">
                                <img
                                    className="userImage"
                                    src={`https://api.adorable.io/avatars/285/${name}.png`}
                                    alt="user logo"
                                />
                                <p className="userName">{name}</p>
                            </div>
                        ) : null}
                    </NavLink>
                    <NavLink activeClassName="activeNavlink" to="/" exact>
                        <span className="logoutStyle" onClick={props.logOut}>
                            Wyloguj się
                        </span>
                    </NavLink>
                </div>
            ) : (
                <div className="userProfileLogOut">
                    <NavLink to="/sign-up" exact>
                        <span className="signUpStyle">Utwórz konto</span>
                    </NavLink>
                    <NavLink to="/login" exact>
                        <span className="loginStyle">Zaloguj się</span>
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default Navbar
