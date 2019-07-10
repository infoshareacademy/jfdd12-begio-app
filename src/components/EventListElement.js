import React from "react"
import { GoButton } from "./GoButton"
import "../EventListElement.css"

export function EventListElement(props) {
    const { event, addMyEvent } = props
    return (
        <>
            <li className="listElement">{event.title}</li>
            <GoButton addMyEvent={addMyEvent} event={event} />
        </>
    )
}
