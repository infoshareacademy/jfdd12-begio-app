import React, { useState } from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import EventsCalendar  from './components/Calendar'
import { EventList } from "./components/EventList"
import { MapView } from "./components/MapView"
import events from "./events.json"
import { Navbar } from "./components/Navbar";



function App() {
  const [myEvents, setMyEvents] = useState([])
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => (
            <div><MapView />
            <EventList
                  myEvents={myEvents}
                  setFavourite={setMyEvents}
                  events={events}
                  />
          </div>
          )} />
          <Route path="/callender" component={App} />
          <Route path="/userProfile" render={() => (<EventsCalendar events = {events}/>)} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App
