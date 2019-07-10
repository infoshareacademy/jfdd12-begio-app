import React from "react"
import { GoButton } from "./GoButton"
import "../EventListElement.css"

export function EventListElement(props) {
    const { event, addMyEvent, removeMyEvent } = props
    return (
        <>
            <li className="listElement">{event.title}</li>
            <GoButton
                addMyEvent={addMyEvent}
                removeMyEvent={removeMyEvent}
                event={event}
            />
        </>
    )
}
