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
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react"
import AppLogo from "./assets/logoOfApp.png"
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

    const LoaderExampleSizesInverted = () => (
        <div style={{ width: "400px", margin: "30px auto" }}>
            <Segment>
                <Dimmer active inverted>
                    <Loader size="massive">Wczytywanie...</Loader>
                </Dimmer>
                <Image src={AppLogo} />
            </Segment>
        </div>
    )

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
                                    LoaderExampleSizesInverted()
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
