import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,

} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer"
import * as events from "./Events.json";
// import mapStyles from "./mapStyles";

// class ....{
//   state={
//     selectedPark: null
//   }

//   setState
// }

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  return (
    <GoogleMap
      onClick={() => setSelectedPark(null)}
      options={{
        // styles: mapStyles,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        showingInfoWindow: true
      }}
      defaultZoom={10}
      defaultCenter={{ lat: 54.372158, lng: 18.638306 }}
    >
      <MarkerClusterer
        enableRetinaIcons
        gridSize={60}
      >
        {events.features.map(event => (
          <Marker
            key={event.id}
            position={{
              lat: event.address.location.lat,
              lng: event.address.location.lng
            }}
            onClick={() => {
              setSelectedPark(event);
            }}
          />
        ))}
        {selectedPark && (
          <InfoWindow

            position={{
              lat: selectedPark.address.location.lat,
              lng: selectedPark.address.location.lng
            }}
            onCloseClick={() => {
              setSelectedPark(null);
            }}
          >
            <div style={{ padding: "0", width: "120px", height: "140px", fontSize: "10px" }}>
              <img style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "70%"
              }} src={selectedPark.images[0]} />
              <p>{selectedPark.title}<br></br>
                {selectedPark.address.city}, {selectedPark.address.street} {selectedPark.address.houseNumber}<br></br>
                <b>{selectedPark.date.day}.{selectedPark.date.month}.{selectedPark.date.year}</b></p>
              <button style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto", fontSize: "10px"
              }}>GO!</button>

            </div>
          </InfoWindow>
        )}
      </MarkerClusterer>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function App() {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCbDcLrfuv3vfFRvaLTfS5OeKdWTSoYzmw&v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
