import React, { useState, useEffect } from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"
import EventsCalendar from "./components/Calendar"
import { EventList } from "./components/EventList"
import { MapView } from "./components/MapView"
import events from "./events.json"
import { Navbar } from "./components/Navbar"
import users from "./users.json"
import UserProfile from "./components/UserProfile"
import "./App.css"

function App() {
    const [currentUser, setCurrentUser] = useState(users[0])
    const [myEvents, setMyEvents] = useState([])

    useEffect(() => {
        console.log(myEvents)
    }, [myEvents])
    const addMyEvent = id => {
        setMyEvents([...myEvents, id])
    }
    const removeMyEvent = id => {
        const eventToDelete = myEvents.find(eventId => eventId === id)
        const eventsWithDeletedEvent = myEvents.filter(
            eventId => eventId !== eventToDelete
        )
        setMyEvents([...eventsWithDeletedEvent])
    }
    return (
        <Router>
            <div>
                <Navbar user={currentUser} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div className="appView">
                                <MapView />
                                <EventList
                                    myEvents={myEvents}
                                    setFavourite={setMyEvents}
                                    events={events}
                                    addMyEvent={addMyEvent}
                                    removeMyEvent={removeMyEvent}
                                />
                            </div>
                        )}
                    />
                    <Route path="/callender" component={App} />
                    <Route
                        path="/userProfile"
                        render={() => (
                            <UserProfile
                                myEvents={myEvents}
                                setFavourite={setMyEvents}
                                events={events}
                                addMyEvent={addMyEvent}
                                removeMyEvent={removeMyEvent}
                                myFuckingEvents={events.filter(event =>
                                    myEvents.includes(event.id)
                                )}
                            />
                        )}
                    />
                    <Route
                        path="/blablablabla"
                        render={() => (
                            <EventsCalendar
                                events={events}
                                userEvents={myEvents}
                            />
                        )}
                    />
                    <Redirect from="/home" to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default App
