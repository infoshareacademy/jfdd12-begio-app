import React, { useContext } from "react"
import Switch from "react-toggle-switch"
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"
import MaterialIcon from "material-icons-react"
import "./GoButton.css"
import { addEvents, removeEvents } from "../services/UsersEventService"
import { LocationProvider, LocationContext } from "../contexts/LocationContext"

export function GoButton(props) {
    const { event } = props
    const { myEvents } = useContext(LocationContext)
    // console.log(myEvents)
    const myEventsIds = myEvents.map(event => event.id)
    console.log(myEventsIds)

    const toggleSwitch = () => {
        myEventsIds.includes(event.id)
            ? removeEvents(event.id)
            : addEvents(event.id)
    }
    return (
        <Switch
            onClick={() => toggleSwitch()}
            on={myEventsIds.includes(event.id)}
            className="switch"
        >
            {<MaterialIcon icon="directions_run" />}
        </Switch>
    )
}
