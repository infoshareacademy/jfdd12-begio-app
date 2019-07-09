import React from "react";
import styles from "./EventView.module.css";

export const EventName = props => {
  return <h1 className={styles.eventName}>{props.name}</h1>;
};
