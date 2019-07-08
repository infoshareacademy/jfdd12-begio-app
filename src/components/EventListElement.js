import React from "react"
import { GoButton } from "./GoButton"
import "../EventListElement.css"

export function EventListElement(props) {
    return (
        <>
            <li className="listElement" />
            <GoButton
                toggleMyEvent={props.toggleMyEvent}
                event={props.toggleMyEvent}
            />
        </>
    )
}
