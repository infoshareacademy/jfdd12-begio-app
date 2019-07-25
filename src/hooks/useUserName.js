import { fetchUserName } from "../services/UsersEventService"
import { useState, useEffect } from "react"
import { useAuth } from "../hooks/useAuth"

export const useUserName = () => {
    const [userName, setUserName] = useState("")
    const loggedUser = useAuth()
    const uid = loggedUser && loggedUser.uid

    useEffect(() => {
        if (uid) {
            fetchUserName(uid).then(name => setUserName(name))
        }
    }, [uid])

    return userName
}
