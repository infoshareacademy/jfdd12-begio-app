import React from "react"

export const EventDescription = ({ event }) => {
    return (
        <p
            style={{
                border: "1px solid grey",
                borderRadius: "10px",
                padding: "15px"
            }}
        >
            {event.description}
        </p>
    )
}
