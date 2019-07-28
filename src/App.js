import React, { useContext } from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"
import { EventList } from "./components/EventList"
import { MapView } from "./components/MapView"
import Navbar from "./components/Navbar"
import UserProfile from "./components/UserProfile"
import "./App.css"
import { LocationContext } from "./contexts/LocationContext"
import firebaseInit from "./firebase"
import { Login } from "./components/Login"
import { SignUp } from "./components/SignUp"
import { useEvents } from "./hooks/useEvents"
import { useAuth } from "./hooks/useAuth.js"
import { useUserName } from "./hooks/useUserName"
import {LoaderForBegio} from "./components/Loader"

const NoMatch = () => (
    <div className="noMatchContener">
        <img
            className="noMatchImage"
            src="https://cdn12.picryl.com/photo/2016/12/31/page-not-found-404-error-bc6717-1024.png"
            alt="404 Page Not Found"
        />
    </div>
)

function App() {
    const { myEvents } = useContext(LocationContext)
    const loggedUser = useAuth()
    const name = useUserName()
    const events = useEvents()

    const logOut = () => {
        firebaseInit.auth().signOut()
    }

    return (
        <Router>
            <div>
                <Navbar name={name} logOut={logOut} />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div className="appView">
                                {loggedUser == null ? (
                                    <LoaderForBegio/>
                                ) : (
                                    <>
                                        {" "}
                                        <MapView
                                            myEvents={myEvents}
                                            events={events}
                                        />
                                        <EventList
                                            myEvents={myEvents}
                                            events={events}
                                        />
                                    </>
                                )}
                            </div>
                        )}
                    />
                    <Route
                        path="/user-profile"
                        render={() => (
                            <UserProfile
                                myEvents={myEvents}
                                events={events}
                                userName={name}
                            />
                        )}
                    />
                    <Route path="/login" component={Login} />
                    <Redirect from="/home" to="/" />
                    <Route path="/sign-up" component={SignUp} />
                    <Redirect from="/home" to="/" />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
