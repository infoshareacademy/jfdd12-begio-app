import React from "react";
export function EventDescription({ event }) {
    return <div style={{ padding: "10px", borderRadius: "10px", fontSize: "12px", border: "1.3px solid grey" }}>{event.description}</div>
}