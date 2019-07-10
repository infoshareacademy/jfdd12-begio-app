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
import { Detal } from "./Detal"
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
                    <p style={{ color: "blue", cursor: "pointer" }} onClick={this.toggleEventDetails}>
                      {this.state.selectedEvent.title}
                    </p>
                    <br />
                    {this.state.selectedEvent.address.city},{" "}
                    {this.state.selectedEvent.address.street}{" "}
                    {this.state.selectedEvent.address.houseNumber}
                    <br />
                    <b>
                      {this.state.selectedEvent.startDate.day}.
                      {this.state.selectedEvent.startDate.month}.
                      {this.state.selectedEvent.startDate.year}
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
            <button style={{ padding: "10px", cursor: "pointer", float: "right", borderRadius: "8px", color: "white", border: "none", background: "rgb(68, 66, 105)" }} onClick={this.toggleEventDetails}>x</button>

            <Detal title={this.state.selectedEvent.title}
              city={this.state.selectedEvent.address.city}
              street={this.state.selectedEvent.address.street}
              houseNumber={this.state.selectedEvent.address.houseNumber}
              day={this.state.selectedEvent.startDate.day}
              month={this.state.selectedEvent.startDate.month}
              year={this.state.selectedEvent.startDate.year}
              photoOne={this.state.selectedEvent.images[0]}
              photoTwo={this.state.selectedEvent.images[1]}
              photoThree={this.state.selectedEvent.images[2]}
              description={this.state.selectedEvent.description} />


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
