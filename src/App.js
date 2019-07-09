import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventsCalendar  from './components/Calendar'
import events from "./events.json"

function App() {
  return (
    <div className="App">
      <EventsCalendar events = {events.map(event => 
       Object.assign({}, {
      'title': event.title,
      'start': new Date(event.startDate.year, event.startDate.month - 1 , event.startDate.day, event.startDate.time[0], event.startDate.time[0]),
      'end': new Date(event.endDate.year, event.endDate.month - 1, event.endDate.day, event.endDate.time[0], event.endDate.time[0])
    }))}/>   
    </div>
  );
}

export default App;
