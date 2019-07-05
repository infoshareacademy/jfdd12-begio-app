import React from "react";
import { events } from "./Events";
import { Marker, InfoWindow } from "react-google-maps";
import { GoButton } from "./GoButton.module.css";
import { EventCard } from "./EventCard.module.css";
export function MarkerList(props) {
  const { toggleOpenEvent, setOpenEvent, openEvent } = props;
  return (
    <div>
      {events.map(event => {
        return (
          <Marker
            key={event.id}
            name={event.name}
            position={event.position}
            onClick={() => toggleOpenEvent(event.id)}
          >
            {openEvent === event.id && (
              <InfoWindow onCloseClick={() => setOpenEvent(null)}>
                <div className={EventCard}>
                  <p>
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={event.img}
                      alt={event.name}
                    />
                  </p>
                  <h2>{event.name}</h2>
                  <h3>{event.date}</h3>
                  <button className={GoButton}>Go!</button>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </div>
  );
}
