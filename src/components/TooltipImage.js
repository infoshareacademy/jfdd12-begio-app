import React from "react";
import styles from "./Tooltip.module.css"

export const TooltipImage = (props) => {
    return <img src={props.image} className={styles.image}/>;
  };