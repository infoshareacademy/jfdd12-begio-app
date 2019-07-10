import React, { useState } from "react"
import './App.css';
import EventsCalendar  from './components/Calendar'
import { EventList } from "./components/EventList"
import { MapView } from "./components/MapView"
import events from "./events.json"

function App() {
  const [myEvents, setMyEvents] = useState([])
  return (
    <div className="App">
      <EventsCalendar events = {events}/>   
      <MapView />
        <EventList
            myEvents={myEvents}
            setFavourite={setMyEvents}
            events={events}
            />
    </div>
  )
  }
  
export default App
