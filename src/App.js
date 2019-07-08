import React from "react";
import AutoPlayCarousel from "./components/AutoPlayCarousel";
import { EventName } from "./components/EventName";
import { EventDescription } from "./components/EventDescription";

function App() {
  return (
    <div className="App">
      <EventName />
      <AutoPlayCarousel />
      <EventDescription />
    </div>
  );
}

export default App;
