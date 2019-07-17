import React from "react";

export const EventPlace = ({ event }) => {
  const { city, street, houseNumber } = event.address;
  return (
    <>
      {city}, {street} {houseNumber}
    </>
  );
};
