import React from "react";

export const EventPlace = props => {
  return (
    <div>
      {props.city}
      <br /> {props.street} {props.house}
    </div>
  );
};
