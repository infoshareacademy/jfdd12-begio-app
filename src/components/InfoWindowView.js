import React from "react";
import { EventPlace } from "./EventView/EventPlace";
import { EventDate } from "./EventDate";
import { GoButton } from "./GoButton";
import './InfoWindowView.css'
export function InfoWindowView({
  myEvents,
  addMyEvent,
  removeMyEvent,
  event,
  toggleEventDetails
}) {
  return (
    <div className="infoWindowCointainer">
          <div className="infoWindowEventInfo">
            <img
              className="infoWindowImage"
              onClick={toggleEventDetails}
              alt="sd"
              src={event.images[0]}
            />
            <p>
              <h1 className="infoWindowEventName"
                   onClick={toggleEventDetails} >
                  {event.title}/>
              </h1>
              <p>
                  <EventPlace event={event} />
              </p>
              <p>
                  <EventDate event={event} />
              </p>
            </p>
          </div>
          <div className="infoWindowGoButton">
            <GoButton
              addMyEvent={addMyEvent}
              removeMyEvent={removeMyEvent}
              event={event}
              myEvents={myEvents}
            />
          </div>
  </div>    
  );
}
