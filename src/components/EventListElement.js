import React from "react"
import { GoButton } from "./GoButton"
import "../EventListElement.css"

export function EventListElement(props) {
    const { event, addMyEvent, removeMyEvent } = props
    const liStyle = { margin: "20px", display: "block", overflow: "hidden" }
    return (
        <>
            <li style={liStyle} className="listElement">
                {event.title}
            </li>
            <p>Id wydarzenia: {event.id}</p>
            <GoButton
                addMyEvent={addMyEvent}
                removeMyEvent={removeMyEvent}
                event={event}
            />
        </>
    )
}
