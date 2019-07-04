import React from "react";
import { MyMapComponent } from "./components/Map";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyMapComponent isMarkerShown minZoom />
    </div>
  );
}

export default App;
