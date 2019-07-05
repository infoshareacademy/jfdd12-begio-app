import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/pl'

const localizer = momentLocalizer(moment) 
const events = [
    {
      'title': '10',
      'start': new Date(2019, 7, 10),
      'end': new Date(2019, 7, 10)
    },
    {
      'title': '20',
      'start': new Date(2019, 7, 8),
      'end': new Date(2019, 7, 8)
    }
]  

export const MyCalendar = props => (
  <div style={{ height: 700, width:800}}>
    <Calendar
      localizer={localizer}
      events={events}
      views={{
        month: true,
        week: true
      }}
    />
  </div>
)