import React, { useContext } from "react"
import Switch from "react-toggle-switch"
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"
import MaterialIcon from "material-icons-react"
import "./GoButton.css"
import { addEvents, removeEvents } from "../services/UsersEventService"
import { LocationContext } from "../contexts/LocationContext"
import { useAuth } from "../hooks/useAuth"

export function GoButton(props) {
    const loggedUser = useAuth()
    const uid = loggedUser && loggedUser.uid

    const { event } = props
    const { myEvents } = useContext(LocationContext)
    const myEventsIds = myEvents.map(event => event.id)
    const toggleSwitch = () => {
        myEventsIds.includes(event.id)
            ? removeEvents(event.id, uid)
            : addEvents(event.id, uid)
    }
    return (
        <Switch
            enabled={Boolean(loggedUser)}
            onClick={() => toggleSwitch()}
            on={loggedUser ? myEventsIds.includes(event.id) : false}
            className="switch"
        >
            {<MaterialIcon icon="directions_run" />}
        </Switch>
    )
}
