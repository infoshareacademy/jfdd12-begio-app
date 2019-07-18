import React, { useState, useEffect } from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"
import { EventList } from "./components/EventList"
import { MapView } from "./components/MapView"
import events from "./events.json"
import Navbar from "./components/Navbar"
import users from "./users.json"
import UserProfile from "./components/UserProfile"
import "./App.css"
import { LocationProvider } from "./contexts/LocationContext"
import firebaseInit from "./firebase"
const NoMatch = () => <h1>404</h1>

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

    const logOut = () => {
        firebaseInit.auth().signOut()

    }
    return (
        <Router>
            <div>
                <Navbar user={currentUser} logOut={logOut} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <LocationProvider>
                                <div className="appView">
                                    <MapView

                                        addMyEvent={addMyEvent}
                                        removeMyEvent={removeMyEvent}
                                        myEvents={myEvents}
                                    />
                                    <EventList
                                        myEvents={myEvents}
                                        setFavourite={setMyEvents}
                                        events={events}
                                        addMyEvent={addMyEvent}
                                        removeMyEvent={removeMyEvent}
                                    />
                                </div>
                            </LocationProvider>
                        )}
                    />
                    <Route
                        path="/user-profile"
                        render={() => (
                            <UserProfile
                                user={currentUser}
                                myEvents={myEvents}
                                setFavourite={setMyEvents}
                                events={events}
                                addMyEvent={addMyEvent}
                                removeMyEvent={removeMyEvent}
                            />
                        )}
                    />
                    <Redirect from="/home" to="/" />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
