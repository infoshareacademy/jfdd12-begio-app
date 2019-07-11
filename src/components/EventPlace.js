import React from "react";
import styles from "./EventView.module.css";

export const EventPlace = ({ event }) => {
  return (
    <div className={styles.place}>
      {event.address.city}
      <br /> {event.address.street} {event.address.house}
    </div>
  );
};
