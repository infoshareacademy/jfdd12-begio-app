import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import events from "../events.json";
import EventView from "../components/EventView";

import Modal from "react-modal";
class Map extends React.Component {
  state = {
    selectedEvent: null,
    showEventDetails: false
  };

  setSelectedEvent = change => {
    change
      ? this.setState({
          selectedEvent: change
        })
      : this.setState({
          selectedEvent: change,
          showEventDetails: false
        });
  };

  toggleEventDetails = () => {
    this.setState({
      showEventDetails: !this.state.showEventDetails
    });
  };
  render() {
    return (
      <div>
        <GoogleMap
          onClick={() => this.setSelectedEvent(null)}
          options={{
            // styles: mapStyles,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            showingInfoWindow: true,
            minZoom: 11
          }}
          defaultZoom={11}
          defaultCenter={{ lat: 54.372158, lng: 18.638306 }}
        >
          <MarkerClusterer enableRetinaIcons gridSize={40}>
            {events.map(event => (
              <Marker
                key={event.id}
                position={{
                  lat: event.address.location.lat,
                  lng: event.address.location.lng
                }}
                onClick={() => {
                  this.setSelectedEvent(event);
                }}
              />
            ))}
            {this.state.selectedEvent && (
              <InfoWindow
                position={{
                  lat: this.state.selectedEvent.address.location.lat,
                  lng: this.state.selectedEvent.address.location.lng
                }}
                onCloseClick={() => {
                  this.setSelectedEvent(null);
                }}
              >
                <div
                  style={{
                    padding: "0",
                    width: "120px",
                    height: "140px",
                    fontSize: "10px"
                  }}
                >
                  <img
                    alt="sd"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "70%"
                    }}
                    src={this.state.selectedEvent.images[0]}
                  />
                  <p>
                    <p onClick={this.toggleEventDetails}>
                      {this.state.selectedEvent.title}
                    </p>
                    <br />
                    {this.state.selectedEvent.address.city},{" "}
                    {this.state.selectedEvent.address.street}{" "}
                    {this.state.selectedEvent.address.houseNumber}
                    <br />
                    <b>
                      {this.state.selectedEvent.date.day}.
                      {this.state.selectedEvent.date.month}.
                      {this.state.selectedEvent.date.year}
                    </b>
                  </p>
                  <button
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "10px"
                    }}
                  >
                    GO!
                  </button>
                </div>
              </InfoWindow>
            )}
          </MarkerClusterer>
        </GoogleMap>
        {this.state.showEventDetails && (
          <Modal
            isOpen={this.state.showEventDetails}
            onRequestClose={this.toggleEventDetails}
          >
            <button onClick={this.toggleEventDetails}>close</button>
            <EventView />
          </Modal>
        )}
      </div>
    );
  }
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export function MapView() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
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
