import React, { useState } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import { MarkerList } from "./MarkerList";

const Map = props => {
  const [openEvent, setOpenEvent] = useState(null);

  const toggleOpenEvent = eventId => {
    setOpenEvent(eventId);
  };

  return (
    <GoogleMap
      options={{
        minZoom: 10,
        maxZoom: 20,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        showingInfoWindow: true
      }}
      onClick={() => {
        setOpenEvent(null);
      }}
      zoom={10}
      defaultCenter={{ lat: 54.372158, lng: 18.638306 }}
      mapTypeControl={false}
    >
      <MarkerList
        openEvent={openEvent}
        toggleOpenEvent={toggleOpenEvent}
        setOpenEvent={setOpenEvent}
      />
    </GoogleMap>
  );
};

export const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCbDcLrfuv3vfFRvaLTfS5OeKdWTSoYzmw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Map);

// {
//   props.isMarkerShown && (
//     <Marker
//       position={{ lat: 54.372158, lng: 18.638306 }}
//       onClick={props.onMarkerClick}
//     />
//   );
// }
