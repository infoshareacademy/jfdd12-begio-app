import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/pl'

const localizer = momentLocalizer(moment) 


function EventsCalendar(props){
  const userEvents = props.events.map(event => 
    Object.assign({}, {
   'title': event.title,
   'start': new Date(event.startDate.year, event.startDate.month - 1 , event.startDate.day, event.startDate.time[0], event.startDate.time[0]),
   'end': new Date(event.endDate.year, event.endDate.month - 1, event.endDate.day, event.endDate.time[0], event.endDate.time[0])
 }))
  console.log(props.events)
  return  <div style={{ height: 600, width:1000}}>
  <Calendar
    localizer={localizer}
    events={userEvents}
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