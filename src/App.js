import React from "react";
import EventView from "./components/EventView";
import events from "./events.json";

function App() {
  return (
    <div className="App">
      <EventView event={events[0]} />
    </div>
  );
}

export default App;
