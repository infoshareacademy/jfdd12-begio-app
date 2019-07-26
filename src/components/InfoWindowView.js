import React from "react"
import { EventPlace } from "./EventPlace"
import { EventDate } from "./EventDate"
import { GoButton } from "./GoButton"
import "./InfoWindowView.css"
export function InfoWindowView({
    myEvents,
    addMyEvent,
    removeMyEvent,
    event,
    toggleEventDetails,
    LoggedUser
}) {
    return (
        <div className="infoWindowCointainer">
            <div className="infoWindowEventInfo">
                <img
                    className="infoWindowImage"
                    onClick={toggleEventDetails}
                    alt="sd"
                    src={event.images[0]}
                />
                <div>
                    <h1
                        className="infoWindowEventName"
                        onClick={toggleEventDetails}
                    >
                        {event.title}
                    </h1>
                    <div>
                        <EventPlace event={event} />
                    </div>
                    <div>
                        <EventDate event={event} />
                    </div>
                </div>
            </div>
            <div className="infoWindowGoButton">
                <GoButton
                    addMyEvent={addMyEvent}
                    removeMyEvent={removeMyEvent}
                    event={event}
                    myEvents={myEvents}
                />
            </div>
        </div>
    )
}
