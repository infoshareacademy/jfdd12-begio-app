import React from "react";
import { PhotoGallery } from "./Carusel";
import { EventName } from "./EventName";
import { EventDescription } from "./EventDescription";
import { EventDate } from "./EventDate";
import { EventPlace } from "./EventPlace";
import { ButtonGo } from "./Buttons";
import calendar from "./calendar.png";

function EventView({ event }) {
  return (
    <>
      <div style={{ fontFamily: "Lato" }}>
        <EventName event={event} />
        <ButtonGo />
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
          <EventPlace event={event} />
        </div>

        <p>
          {" "}
          <EventDescription event={event} />
        </p>
      </div>
    </>
  );
}

export default EventView;
