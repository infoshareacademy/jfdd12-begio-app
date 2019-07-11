import React from "react";

export const EventPlace = ({ event }) => {
  return (
    <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
      {event.address.city}, {event.address.street} {event.address.houseNumber}
    </div>
  );
};
