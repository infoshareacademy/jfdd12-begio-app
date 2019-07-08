import React, { useState } from "react"
import "./App.css"
import { EventList } from "./components/EventList"

function App() {
    const [myEvents, setMyEvents] = useState([])
    const [events, setEvents] = useState([{ id: 0 }, { id: 1 }, { id: 2 }])

    return (
        <div className="App">
            <EventList
                myEvents={myEvents}
                setFavourite={setMyEvents}
                events={events}
            />
        </div>
    )
}

export default App
