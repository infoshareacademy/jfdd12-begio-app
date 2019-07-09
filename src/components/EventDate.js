import React from "react";

export const EventDate = props => {
  return (
    <div>
      {props.year} {props.month} {props.day} {props.time}
    </div>
  );
};
