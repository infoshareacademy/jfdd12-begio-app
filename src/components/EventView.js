import React from "react";
import AutoPlayCarousel from "./AutoPlayCarousel";
import { EventName } from "./EventName";
import { EventDescription } from "./EventDescription";
import { EventDate } from "./EventDate";
import { EventPlace } from "./EventPlace";
import {ExitButton} from "./Buttons"
import {ButtonGo} from "./Buttons"
import calendar from "./calendar.png"
import styles from "./EventView.module.css"

function EventView() {
  return (
    <div className={styles.EventView}>
        <div className={styles.topView}>
            <EventName />
            <ButtonGo/>
            <ExitButton/>
        </div>
        <AutoPlayCarousel />
        <div className={styles.bottomView}> 
            <img src={calendar} className={styles.calendar} alt="calendar" />
            <EventDate />
            <EventDescription />
            <EventPlace />
        </div>
    </div>
  );
}

export default EventView;



 