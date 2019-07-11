import React from "react"
import { GoButton } from "./GoButton"
import "../EventListElement.css"

export function EventListElement(props) {
    const { event, addMyEvent, removeMyEvent } = props
    const liStyle = {
        margin: "20px",
        display: "block",
        overflow: "hidden",
        borderTop: "2px solid black"
    }

    let month = event.startDate.month

    switch (month) {
        case 1:
            month = "stycznia"
            break
        case 2:
            month = "lutego"
            break
        case 3:
            month = "marca"
            break
        case 4:
            month = "kwietnia"
            break
        case 5:
            month = "maja"
            break
        case 6:
            month = "czerwca"
            break
        case 7:
            month = "lipca"
            break
        case 8:
            month = "sierpnia"
            break
        case 9:
            month = "września"
            break
        case 10:
            month = "października"
            break
        case 11:
            month = "listopada"
            break
        case 12:
            month = "grudnia"
            break

        default:
            month = "Err: Brak nazwy miesiąca"
            break
    }

    return (
        <li style={liStyle} className="listElement">
            <p>{event.title}</p>
            <img style={{ width: "100%" }} src={event.images[0]} alt="" />
            <p>
                Gdzie ? : {event.address.street}/{event.address.houseNumber}
            </p>
            <p>
                Kiedy się zaczyna ? : {event.startDate.day}
                {` ${month} `}
                {event.startDate.year} o godzinie: {event.startDate.time[0]}:
                {event.startDate.time[1]}
            </p>
            <p>
                Kiedy się kończy ? : {event.endDate.day}
                {` ${month} `}
                {event.endDate.year} o godzinie: {event.endDate.time[0]}:
                {event.endDate.time[1]}
            </p>
            <span>Chcem wziąć udział => </span>
            <GoButton
                addMyEvent={addMyEvent}
                removeMyEvent={removeMyEvent}
                event={event}
            />
        </li>
    )
}
