import React from "react";
export function EventDate({ event }) {
    return <>
        <i style={{ marginBottom: "10px" }}>{event.startDate.day}. {event.startDate.month}. {event.startDate.year}</i>
    </>
}