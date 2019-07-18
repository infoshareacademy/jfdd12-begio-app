import React, { useState, useEffect } from "react"
import firebaseInit from "../firebase";
import App from "../App"
import { Login } from "./Login"

export function CheckLogin() {
    const [user, setUser] = useState({})

    useEffect(() => {
        firebaseInit.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [user])



    return user ? (<App />) : (<Login />)
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