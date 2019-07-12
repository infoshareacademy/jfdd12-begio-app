import React from "react"
import { GoButton } from "./GoButton"
import "../EventListElement.css"
import { fontSize } from "@material-ui/system"

export function EventListElement(props) {
    const { event, addMyEvent, removeMyEvent, myEvents } = props
    const liStyle = {
        margin: "5px",
        display: "flex",
        flexBasis: "500px",
        // overflow: "hidden",
        borderTop: "2px solid black",
        fontSize: "13px"
    }
    // const div

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
        <li style={liStyle}>
            <img style={{ width: "200px" }} src={event.images[0]} alt="" />
            <div>
                <p>{event.title}</p>

                <p>
                    Gdzie ? : {event.address.street}/{event.address.houseNumber}
                </p>
                <p>
                    Kiedy się zaczyna ? : {event.startDate.day}
                    {` ${month} `}
                    {event.startDate.year} o godzinie: {event.startDate.time[0]}
                    :{event.startDate.time[1]}
                </p>
                <p>
                    Kiedy się kończy ? : {event.endDate.day}
                    {` ${month} `}
                    {event.endDate.year} o godzinie: {event.endDate.time[0]}:
                    {event.endDate.time[1]}
                </p>
            </div>

            <GoButton
                addMyEvent={addMyEvent}
                removeMyEvent={removeMyEvent}
                event={event}
                myEvents={myEvents}
            />
        </li>
    )
}
