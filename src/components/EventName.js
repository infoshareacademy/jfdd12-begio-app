import React from "react";
import styles from "./EventView.module.css";

export const EventName = ({ event }) => {
  return <h1 className={styles.eventName}>{event.title}</h1>;
};
