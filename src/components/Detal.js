
import React from "react";
import calendar from "./cal.png";
import { PhotoGallery } from "./Carusel"
import { EventPlace } from "./EventPlace"
import { EventDate } from "./EventDate";
import { EventDescription } from "./EventDescription"
export function Detal({ event }) {
    return (
        <>
            <center><h3 style={{ marginBottom: "0" }}>{event.title} <button style={{ marginBottom: "5px" }}>GO!</button></h3></center>
            <p><EventPlace event={event} /></p>
            <p><img style={{ width: "3%", marginRight: "5px" }} alt="cal" src={calendar} />
                <EventDate event={event} />
            </p>
            <PhotoGallery one={event.images[0]} two={event.images[1]} three={event.images[2]} />
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>Opis:</p>
            <EventDescription event={event} />
        </>
    );
}


// title={this.state.selectedEvent.title}
//               city={this.state.selectedEvent.address.city}
//               street={this.state.selectedEvent.address.street}
//               houseNumber={this.state.selectedEvent.address.houseNumber}
//               day={this.state.selectedEvent.startDate.day}
//               month={this.state.selectedEvent.startDate.month}
//               year={this.state.selectedEvent.startDate.year}
//               photoOne={this.state.selectedEvent.images[0]}
//               photoTwo={this.state.selectedEvent.images[1]}
//               photoThree={this.state.selectedEvent.images[2]}
//               description={this.state.selectedEvent.description} 