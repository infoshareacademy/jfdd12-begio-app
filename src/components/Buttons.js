import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./EventView.module.css";

export const ExitButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} className={styles.exitButton}>
      X
    </Button>
  );
};

export const ButtonGo = () => {
  return <button className={styles.buttonGo}>GO!</button>;
};
