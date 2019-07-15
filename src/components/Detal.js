
import React from "react";
import calendar from "./cal.png";
import { PhotoGallery } from "./Carusel"
import { EventPlace } from "./EventPlace"
import { EventDate } from "./EventDate";
import { EventDescription } from "./EventDescription"
export function Detal({ event }) {
    return (
        <div className="detalContainer">
            <center>
                <h3 style={{ marginBottom: "0" }}>{event.title} 
                <button style={{ marginBottom: "5px" }}>GO!</button>
                </h3>
                </center>
            <p><EventPlace event={event} /></p>
            <p><img style={{ width: "3%", marginRight: "5px" }} alt="cal" src={calendar} />
                <EventDate event={event} />
            </p>
            <PhotoGallery one={event.images[0]} two={event.images[1]} three={event.images[2]} />
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>Opis:</p>
            <EventDescription event={event} />
        </div>
    );
}
