import React, { useState, useEffect } from "react"
import firebaseInit from "../firebase";
import App from "../App"
import { Login } from "./Login"

export function CheckLogin() {
    const [LoggedUser, setUser] = useState({})

    useEffect(() => {
        firebaseInit.auth().onAuthStateChanged((LoggedUser) => {
            if (LoggedUser) {
                setUser(LoggedUser)
            } else {
                setUser(null)
            }
        })
    }, [LoggedUser])



    return LoggedUser ? (<App />) : (<Login />)
}


// export class CheckLogin extends React.Component {

//     state = {
//         user: {}
//     }
//     componentDidMount() {
//         this.authListener()
//     }
//     authListener() {
//         firebaseInit.auth().onAuthStateChanged((user) => {
//             if (user) {
//                 this.setState(
//                     { user: user }
//                 )
//             } else {
//                 this.setState(
//                     { user: null })
//             }
//         })
//     }

//     render() {
//         return this.state.user ? (<App />) : (<Login />)
//     }

// }