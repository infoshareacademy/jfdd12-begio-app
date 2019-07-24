import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/pl";

const localizer = momentLocalizer(moment);

function EventsCalendar(props) {
  const { myEvents } = props;
  const currentUserEvents = myEvents
    .map(event =>
      Object.assign(
        {},
        {
          title: event.title,
          start: new Date(
            event.startDate.year,
            event.startDate.month - 1,
            event.startDate.day,
            event.startDate.time.hour,
            event.startDate.time.minute
          ),
          end: new Date(
            event.endDate.year,
            event.endDate.month - 1,
            event.endDate.day,
            event.endDate.time.hour,
            event.endDate.time.minute
          )
        }
      )
    );
  return (
    <div style={{ height: 600, width: "100%", marginBottom: "40px" }}>
      <Calendar
        localizer={localizer}
        events={currentUserEvents}
        views={{
          month: true,
          day: true
        }}
        eventPropGetter={() => ({
          style: { backgroundColor: "#49406dce", cursor: "auto" }
        })}
        messages={{
          next: ">>",
          previous: "<<",
          today: "Dziś",
          month: "Miesiąc",
          day: "Dzień"
        }}
      />
    </div>
  );
}

export default EventsCalendar;
