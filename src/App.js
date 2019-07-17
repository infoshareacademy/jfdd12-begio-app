import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { EventList } from "./components/EventList";
import { MapView } from "./components/MapView";
import events from "./events.json";
import Navbar from "./components/Navbar";
import users from "./users.json";
import UserProfile from "./components/UserProfile";
import "./App.css";

const NoMatch = () => <h1>404</h1>;
function App() {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [myEvents, setMyEvents] = useState([]);

  const addMyEvent = id => {
    setMyEvents([...myEvents, id]);
  };

  const removeMyEvent = id => {
    const eventToDelete = myEvents.find(eventId => eventId === id);
    const eventsWithDeletedEvent = myEvents.filter(
      eventId => eventId !== eventToDelete
    );
    setMyEvents([...eventsWithDeletedEvent]);
  };
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
  );
}

export default App;
