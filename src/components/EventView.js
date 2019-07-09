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
          startYear={event.startDate.year}
          startMonth={event.startDate.month}
          startDay={event.startDate.day}
          startTime={event.startDate.time}
          endYear={event.endDate.year}
          endMonth={event.endDate.month}
          endDay={event.endDate.day}
          endTime={event.endDate.time}
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
