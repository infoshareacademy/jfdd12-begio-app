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
import { Login } from "./components/Login";
import ReactDOM from "react-dom";
const NoMatch = () => <h1>404</h1>

function App() {
    const [currentUser, setCurrentUser] = useState(users[0])
    const [myEvents, setMyEvents] = useState([])
    const [LoggedUser, setUser] = useState({})

    useEffect(() => {
        firebaseInit.auth().onAuthStateChanged((LoggedUser) => {
            if (LoggedUser) {
                setUser(LoggedUser)
            } else {
                setUser(null)
            }
        })
    }, [LoggedUser])


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

    const logIn = () => {
        ReactDOM.render(<Login />, document.getElementById("root"));
    }
    return (

        <Router>
            <div>
                <Navbar logIn={logIn} user={currentUser} logOut={logOut} LoggedUser={LoggedUser} />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <LocationProvider>
                                <div className="appView">
                                    <MapView
                                        LoggedUser={LoggedUser}
                                        addMyEvent={addMyEvent}
                                        removeMyEvent={removeMyEvent}
                                        myEvents={myEvents}
                                    />
                                    <EventList
                                        LoggedUser={LoggedUser}
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
                                LoggedUser={LoggedUser}
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
