import { fetchUserName } from "../services/UsersEventService"
import { useState, useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import firebase from "firebase"



export const useUserName = () => {
    const [userName, setUserName] = useState([])
    const loggedUser = useAuth()
    const uid = loggedUser && loggedUser.uid

    useEffect(() => {
        if (uid) {
            const userNameR = fetchUserName(uid)
            setUserName(userNameR)
            return () => {
                userNameR.off("value")
            }
        }
    }, [uid])

    return userName
}
