import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "./logo.png"
import UserLogo from "./userLogo.png"
import "./NavBar.css"
export const Navbar = props => {
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
                    <NavLink to="/userProfile">
                        <img
                            className="UserLogo"
                            src={UserLogo}
                            alt="user logo"
                        />
                        {props.user.name}
                    </NavLink>
                </p>
            </div>
        </nav>
    )
}
