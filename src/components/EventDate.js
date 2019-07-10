import React from "react";
import styles from "./EventView.module.css";

export const EventDate = props => {
  return (
    <div className={styles.date}>
      {props.startYear}/ {props.startMonth}/{props.startDay} godz:{" "}
      {props.startTime}
      <br />
      {props.endYear}/ {props.endMonth} /{props.endDay}/ {props.endtTime}
    </div>
  );
};
