import React from "react";

export const EventDate = props => {
  return (
    <div>
      {props.startYear} {props.startMonth} {props.startDay} {props.startTime}
      <br />
      {props.endYear} {props.endMonth} {props.endDay} {props.endtTime}
    </div>
  );
};
