import React from "react"
import { GoButton } from "./GoButton"
import "../EventListElement.css"

export function EventListElement(props) {
    const { event } = props
    return (
        <>
            <li className="listElement">
                {event.title} - {event.address.street}{" "}
                {event.address.houseNumber}
            </li>
            <GoButton
                toggleMyEvent={props.toggleMyEvent}
                event={props.toggleMyEvent}
                id={event.id}
            />
        </>
    )
}
