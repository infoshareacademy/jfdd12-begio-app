import React from "react"
import { GoButton } from "./GoButton"
import "../EventListElement.css"
import MaterialIcon from "material-icons-react"

export function EventListElement(props) {
    const { event, addMyEvent, removeMyEvent, myEvents } = props

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
        <li className="listElement">
            <div className="eventInfo">
                <img className="imageElement" src={event.images[0]} alt="" />
                <div className="eventNameDatePlace">
                    <p className="eventTitle">{event.title}</p>

                    <p>
                        <MaterialIcon icon="place" />
                        {event.address.street} {event.address.houseNumber}
                    </p>
                    <p>
                        <MaterialIcon icon="date_range" />
                        {event.startDate.day !== event.endDate.day &&
                        event.startDate.month === event.endDate.month
                            ? `${event.startDate.day} -  ${event.endDate.day}`
                            : event.startDate.day}
                        {` ${month} `}
                        {event.startDate.year}
                    </p>
                    <p>
                        <MaterialIcon icon="access_time" />
                        {event.startDate.time[0]}:
                        {event.startDate.time[1] + "0"} -{event.endDate.time[0]}
                        :{event.endDate.time[1] + "0"}
                    </p>
                    <button className="learnMore">
                        Kliknij i dowiedz się więcej...
                    </button>
                </div>
            </div>
            <div className="eventButton">
                <GoButton
                    addMyEvent={addMyEvent}
                    removeMyEvent={removeMyEvent}
                    event={event}
                    myEvents={myEvents}
                />
            </div>
        </li>
    )
}
