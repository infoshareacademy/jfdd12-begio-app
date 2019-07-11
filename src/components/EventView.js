import React from "react";
import AutoPlayCarousel from "./AutoPlayCarousel";
import { EventName } from "./EventName";
import { EventDescription } from "./EventDescription";
import { EventDate } from "./EventDate";
import { EventPlace } from "./EventPlace";
import { ButtonGo } from "./Buttons";
import calendar from "./calendar.png";
import styles from "./EventView.module.css";

function EventView({ event }) {
  return (
    <div className={styles.EventView}>
      <div className={styles.topView}>
        <EventName event={event} />
        <ButtonGo />
      </div>
      <AutoPlayCarousel images={event.images} />
      <div className={styles.bottomView}>
        <div className={styles.eventTime}>
          <img src={calendar} className={styles.calendar} alt="calendar" />
          <EventDate event={event} />
          <EventPlace event={event} />
        </div>

        <p className={styles.descrition}>
          {" "}
          <EventDescription event={event} />
        </p>
      </div>
    </div>
  );
}

export default EventView;
