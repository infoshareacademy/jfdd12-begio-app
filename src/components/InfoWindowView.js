import React from "react";
import { EventName } from "./EventName";
import { EventPlace } from "./EventPlace";
import { EventDate } from "./EventDate";
import { GoButton } from "./GoButton";
export function InfoWindowView({
  myEvents,
  addMyEvent,
  removeMyEvent,
  event,
  toggleEventDetails
}) {
  return (
    <>
      <div
        style={{
          margin: "0",
          padding: "0",
          width: "120px",
          height: "140px",
          fontSize: "10px"
        }}
      >
        <img
          onClick={toggleEventDetails}
          alt="sd"
          style={{
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "76%"
          }}
          src={event.images[0]}
        />
        <p>
          <p
            style={{
              fontWeight: "bold",
              color: "rgb(68, 66, 105)",
              cursor: "pointer",
              margin: "0"
            }}
            onClick={toggleEventDetails}
          >
            <EventName event={event} />
          </p>

          <EventPlace event={event} />
          <br />
          <b>
            <EventDate event={event} />
          </b>
        </p>
        <GoButton
          addMyEvent={addMyEvent}
          removeMyEvent={removeMyEvent}
          event={event}
          myEvents={myEvents}
        />
      </div>
    </>
  );
}
