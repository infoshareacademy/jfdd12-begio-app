import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventsCalendar  from './components/Calendar'
import events from "./events.json"

function App() {
  return (
    <div className="App">
      <EventsCalendar events = {events}/>   
    </div>
  );
}

export default App;
