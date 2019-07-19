import React from "react";
import { PhotoGallery } from "./Carusel";
import { EventDescription } from "./EventDescription";
import { EventDate } from "./EventDate";
import { EventPlace } from "./EventPlace";
import { GoButton } from "./GoButton";
import calendar from "../assets/calendar.png";

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
        {LoggedUser ? (
          <GoButton
            addMyEvent={addMyEvent}
            removeMyEvent={removeMyEvent}
            event={event}
            myEvents={myEvents}
          />
        ) : null}
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
                width: "50px",
                height: "50px",
                marginRight: "8px",
                marginBottom: "10px"
              }}
              src={calendar}
              alt="calendar"
            />
            <EventDate event={event} />
          </div>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px"
            }}
          >
            {" "}
            <EventPlace event={event} />
          </p>
        </div>

        <p>
          {" "}
          <EventDescription event={event} />
        </p>
      </div>
    </div>
  );
}

export default EventView;
