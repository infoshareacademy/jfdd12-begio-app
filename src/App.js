import React from "react";
import AutoPlayCarousel from "./components/AutoPlayCarousel";
import { EventName } from "./components/EventName";
import { EventDescription } from "./components/EventDescription";
import { EventDate } from "./components/EventDate";
import { EventPlace } from "./components/EventPlace";

function App() {
  return (
    <div className="App">
      <EventName />
      <AutoPlayCarousel />
      <EventDate />
      <EventDescription />
      <EventPlace />
    </div>
  );
}

export default App;
