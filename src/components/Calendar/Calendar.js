import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/pl'

const localizer = momentLocalizer(moment) 


function EventsCalendar(props){
  const {events, userEvents} = props
  const currentUserEvents = events.filter(event => userEvents.includes(event.id)).map(event => Object.assign({}, { 
   'title': event.title,
   'start': new Date(event.startDate.year, 
    event.startDate.month - 1 ,
    event.startDate.day,
    event.startDate.time[0], 
    event.startDate.time[1]), 
    'end': new Date(event.endDate.year, 
    event.endDate.month - 1, 
    event.endDate.day, 
    event.endDate.time[0], 
    event.endDate.time[1])
   }))
  return  <div style={{marginLeft:20, marginTop: 50, height: 600, width:'50%'}}>
  <Calendar
    localizer={localizer}
    events={currentUserEvents}
    views={{
      month: true,
      day: true
    }}
    eventPropGetter={() => ({style: {backgroundColor: '#aaa6ba'}})}
    messages={{next:">>",previous:"<<",today:"Dziś", month: "Miesiąc", day: "Dzień"}}
  />
</div>
}

export default EventsCalendar