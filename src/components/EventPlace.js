import React from "react";
export function EventPlace({ event }) {
    return <p>{event.address.city} {event.address.street} {event.address.houseNumber}</p>
}