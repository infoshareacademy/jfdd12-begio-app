import React from "react";
import { events } from "./Events";
import { Marker } from "react-google-maps";

export function MarkerList() {
  return (
    <div>
      {events.map(event => {
        const alertInfo = () => {
          alert(event.name);
        };
        return (
          <Marker
            key={event.id}
            name={event.name}
            position={event.position}
            onClick={alertInfo}
          />
        );
      })}
    </div>
  );
}
