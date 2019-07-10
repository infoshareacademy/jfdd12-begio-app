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

function EventView({ event, onClose }) {
  return (
    <div className={styles.EventView}>
      <div className={styles.topView}>
        <EventName name={event.title} />
        <ButtonGo />
        <ExitButton onClick={onClose} />
      </div>
      <AutoPlayCarousel images={event.images} />
      <div className={styles.bottomView}>
        <div className={styles.eventTime}>
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
          <EventPlace
            city={event.address.city}
            street={event.address.street}
            house={event.address.houseNumber}
          />
        </div>

        <EventDescription description={event.description} />
      </div>
    </div>
  );
}

export default EventView;
