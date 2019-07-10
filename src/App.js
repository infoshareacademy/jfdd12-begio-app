import React, { useState, useEffect } from "react"
import "./App.css"
import { EventList } from "./components/EventList"
import events from "./events.json"
import users from "./users.json"
import { MapView } from "./components/MapView"

function App() {
    const [currentUser, setCurrentUser] = useState(users[0])
    const [myEvents, setMyEvents] = useState([])

    useEffect(() => {
        console.log(myEvents)
    }, [myEvents])
    const addMyEvent = id => {
        setMyEvents([...myEvents, id])
    }
    return (
        <div className="App">
            <MapView />
            <EventList
                myEvents={myEvents}
                setFavourite={setMyEvents}
                events={events}
                addMyEvent={addMyEvent}
            />
            {currentUser.name}
        </div>
    )
}

export default App
