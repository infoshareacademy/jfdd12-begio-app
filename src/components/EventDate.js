import React from "react"
import "./EventListElement.css"

export const EventDate = ({ event }) => {
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
        <div>
            <p style={{ margin: 0, paddingBottom: "3px", paddingTop: "3px" }}>
                {event.startDate.day !== event.endDate.day &&
                event.startDate.month === event.endDate.month
                    ? `${event.startDate.day} -  ${event.endDate.day}`
                    : event.startDate.day}
                {` ${month} `}
                {event.startDate.year}
            </p>
            <p>
                {event.startDate.time.hour}:{event.startDate.time.minute} -
                {event.endDate.time.hour}:{event.endDate.time.minute}
            </p>
        </div>
    )
}
