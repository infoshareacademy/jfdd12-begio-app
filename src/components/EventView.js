import React from "react";
import AutoPlayCarousel from "./AutoPlayCarousel";
import { EventName } from "./EventName";
import { EventDescription } from "./EventDescription";
import { EventDate } from "./EventDate";
import { EventPlace } from "./EventPlace";
import { ExitButton } from "./Buttons";
import { ButtonGo } from "./Buttons";
import calendar from "./calendar.png";
import styles from "./EventView.module.css";

function EventView({ event }) {
  return (
    <div className={styles.EventView}>
      <div className={styles.topView}>
        <EventName name={event.title} />
        <ButtonGo />
        <ExitButton />
      </div>
      <AutoPlayCarousel />
      <div className={styles.bottomView}>
        <img src={calendar} className={styles.calendar} alt="calendar" />
        <EventDate
          year={event.startDate.year}
          month={event.startDate.month}
          day={event.startDate.day}
          time={event.startDate.time}
        />
        <EventDescription description={event.description} />
        <EventPlace
          city={event.address.city}
          street={event.address.street}
          house={event.address.houseNumber}
        />
      </div>
    </div>
  );
}

export default EventView;
