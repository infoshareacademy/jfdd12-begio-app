import React, { useState } from "react"
import "./App.css"
import { EventList } from "./components/EventList"
import events from "./events.json"
import { Map } from "./components/Map"

function App() {
    const [myEvents, setMyEvents] = useState([])
    return (
        <div className="App">
            <Map />
            <EventList
                myEvents={myEvents}
                setFavourite={setMyEvents}
                events={events}
            />
        </div>
    )
}

export default App
