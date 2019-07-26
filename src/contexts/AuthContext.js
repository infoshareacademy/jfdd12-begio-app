import React, { useState, useEffect, createContext } from "react"
import firebase from "firebase/app"
import "firebase/auth"

export const AuthContext = createContext()

export const AuthProvider = props => {
    const [loggedUser, setLoggedUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setLoggedUser(user)
            } else {
                setLoggedUser(false)
            }
        })
    }, [])

    return <AuthContext.Provider value={loggedUser} {...props} />
}

export const AuthConsumer = AuthContext.Consumer
