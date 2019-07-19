import React from "react"
import Switch from "react-toggle-switch"
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"
import MaterialIcon from "material-icons-react"
import "./GoButton.css"
import { addEvents } from "../services/UsersEventService"

export function GoButton(props) {
    const { myEvents, removeMyEvent, addMyEvent, event } = props

    const toggleSwitch = () => {
        myEvents.includes(event.id)
            ? removeMyEvent(event.id)
            : addEvents(event.id)
    }
    return (
        <Switch
            onClick={() => toggleSwitch()}
            on={myEvents.includes(event.id)}
            className="switch"
        >
            {<MaterialIcon icon="directions_run" />}
        </Switch>
    )
}
