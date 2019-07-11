import React from "react";
import styles from "./EventView.module.css";

export const EventDate = ({ event }) => {
  return (
    <div className={styles.date}>
      {event.startDate.year}/ {event.startDate.month}/{event.startDate.day}{" "}
      godz: {event.startDate.time}
      <br />
      {event.endDate.year}/ {event.endDate.month}/{event.endDate.day} godz:{" "}
      {event.endDate.time}
    </div>
  );
};
