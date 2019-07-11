import React from "react";

export const EventPlace = ({ event }) => {
  return (
    <>
      {event.address.city}, {event.address.street} {event.address.houseNumber}
    </>
  );
};
