import React, { useState } from "react"
import "./App.css"
import { EventList } from "./components/EventList"
import events from "./events.json"
import users from "./users.json"
import { MapView } from "./components/MapView"

function App() {
    const [myEvents, setMyEvents] = useState([])
    return (
        <div className="App">
            <MapView />
            <EventList
                users={users}
                myEvents={myEvents}
                setFavourite={setMyEvents}
                events={events}
                id={events.id}
            />
        </div>
    )
}

export default App
