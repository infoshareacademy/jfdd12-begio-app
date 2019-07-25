import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const useAuth = () => {
    const loggedUser = useContext(AuthContext)
    return loggedUser
}
