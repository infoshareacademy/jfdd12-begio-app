import React, { useState } from "react"
import "./App.css"
import { EventList } from "./components/EventList"
import events from "./events.json"
import { MapView } from "./components/MapView"

function App() {
    const [myEvents, setMyEvents] = useState([])
    return (
        <div className="App">
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
