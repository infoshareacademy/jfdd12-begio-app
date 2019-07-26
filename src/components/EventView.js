import React from "react"
import { PhotoGallery } from "./Carusel"
import { EventDescription } from "./EventDescription"
import { EventDate } from "./EventDate"
import { EventPlace } from "./EventPlace"
import { GoButton } from "./GoButton"
import calendar from "../assets/calendar.png"

function EventView({
    myEvents,
    addMyEvent,
    removeMyEvent,
    event,
    toggleEventDetails,
    LoggedUser
}) {
    return (
        <div>
            <div style={{ fontFamily: "Lato" }}>
                <h2>{event.title}</h2>

                <GoButton
                    addMyEvent={addMyEvent}
                    removeMyEvent={removeMyEvent}
                    event={event}
                    myEvents={myEvents}
                />
            </div>
            <PhotoGallery
                one={event.images[0]}
                two={event.images[1]}
                three={event.images[2]}
            />
            <div>
                <div style={{ marginLeft: "8px" }}>
                    <div style={{ display: "flex", flexFlow: "row" }}>
                        <img
                            style={{
                                width: "40px",
                                height: "40px",
                                marginRight: "8px"
                            }}
                            src={calendar}
                            alt="calendar"
                        />
                        <EventDate event={event} />
                    </div>
                    <p
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            marginBottom: "8px"
                        }}
                    >
                        {" "}
                        <EventPlace event={event} />
                    </p>
                </div>

                <div>
                    {" "}
                    <EventDescription event={event} />
                </div>
            </div>
        </div>
    )
}

export default EventView
