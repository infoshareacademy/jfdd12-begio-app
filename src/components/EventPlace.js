import React from "react";
import styles from "./EventView.module.css";

export const EventPlace = props => {
  return (
    <div className={styles.place}>
      {props.city}
      <br /> {props.street} {props.house}
    </div>
  );
};
