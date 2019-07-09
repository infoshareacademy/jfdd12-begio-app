import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/pl'

const localizer = momentLocalizer(moment) 


function EventsCalendar(events){
  console.log(events)
  return  <div style={{ height: 600, width:1000}}>
  <Calendar
    localizer={localizer}
    events={events.events}
    views={{
      month: true,
      day: true
    }}
    eventPropGetter={() => ({style: {backgroundColor: 'green'}})}
    messages={{next:"Następny",previous:"Poprzedni",today:"Dziś", month: "Miesiąc", day: "Dziś"}}
  />
</div>
}

export default EventsCalendar