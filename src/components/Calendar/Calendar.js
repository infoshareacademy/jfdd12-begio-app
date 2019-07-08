import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/pl'

const localizer = momentLocalizer(moment) 
const events = [
    {
      'title': '10',
      'allDay': true,
      'start': new Date(2019, 0, 7),
      'end': new Date(2019, 0, 8),
    },
    {
      'title': '20',
      'allDay': true,
      'start': new Date(2019, 7, 8),
      'end': new Date(2019, 7, 8)
    }
]  


const MyCalendar = props => (
  <div style={{ height: 400, width:600}}>
    <Calendar
      localizer={localizer}
      events={events}
      views={{
        month: true,
        day: true
      }}
      eventPropGetter={() => ({style: {backgroundColor: 'green', borderRadius: '50%', width: '50%', height: '50', textAlign: 'center', fontSize: '100', position: 'center', marginLeft: '25%'}})}
      messages={{next:"Następny",previous:"Poprzedni",today:"Dziś"}}
    />
  </div>
)

export default MyCalendar