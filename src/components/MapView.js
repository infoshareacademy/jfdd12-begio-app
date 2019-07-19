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
import { InfoWindowView } from "./InfoWindowView";
import { LocationConsumer } from "../contexts/LocationContext";
class Map extends React.Component {
  state = {
    showEventDetails: false
  };

  toggleEventDetails = () => {
    this.setState({
      showEventDetails: !this.state.showEventDetails
    });
  };
  render() {
    return (
      <>
        <div>
          <LocationConsumer>
            {value => (
              <GoogleMap
                onClick={() => {
                  value.setSelectedEvent(null);
                }}
                options={{
                  // styles: mapStyles,
                  mapTypeControl: false,
                  fullscreenControl: false,
                  streetViewControl: false,
                  showingInfoWindow: true,
                  minZoom: 12.5
                }}
                defaultZoom={12.5}
                defaultCenter={{ lat: 54.372158, lng: 18.638306 }}
              >
                <MarkerClusterer enableRetinaIcons gridSize={40}>
                  {events.map(event => (
                    <LocationConsumer>
                      {value => (
                        <Marker
                          key={event.id}
                          position={{
                            lat: event.address.location.lat,
                            lng: event.address.location.lng
                          }}
                          onClick={() => {
                            value.setSelectedEvent(event);
                          }}
                        />
                      )}
                    </LocationConsumer>
                  ))}

                  <LocationConsumer>
                    {value => {
                      return (
                        value.selectedEvent && (
                          <InfoWindow
                            position={{
                              lat: value.selectedEvent.address.location.lat,
                              lng: value.selectedEvent.address.location.lng
                            }}
                            onCloseClick={() => {
                              value.setSelectedEvent(null);
                            }}
                          >
                            <InfoWindowView
                              LoggedUser={this.props.LoggedUser}
                              addMyEvent={this.props.addMyEvent}
                              removeMyEvent={this.props.removeMyEvent}
                              myEvents={this.props.myEvents}
                              event={value.selectedEvent}
                              toggleEventDetails={this.toggleEventDetails}
                            />
                          </InfoWindow>
                        )
                      );
                    }}
                  </LocationConsumer>
                </MarkerClusterer>
              </GoogleMap>
            )}
          </LocationConsumer>
          {this.state.showEventDetails && (
            <Modal
              isOpen={this.state.showEventDetails}
              onRequestClose={this.toggleEventDetails}
            >
              <button
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  float: "right",
                  borderRadius: "8px",
                  color: "white",
                  border: "none",
                  background: "rgb(68, 66, 105)"
                }}
                onClick={this.toggleEventDetails}
              >
                x
              </button>
              <LocationConsumer>
                {value => {
                  return (
                    <EventView
                      LoggedUser={this.props.LoggedUser}
                      addMyEvent={this.props.addMyEvent}
                      removeMyEvent={this.props.removeMyEvent}
                      myEvents={this.props.myEvents}
                      event={value.selectedEvent}
                      toggleEventDetails={this.toggleEventDetails}
                    />
                  );
                }}
              </LocationConsumer>
            </Modal>
          )}
        </div>
      </>
    );
  }
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export function MapView(props) {
  return (
    <div style={{ flexBasis: "50%", height: "85vh" }}>
      {props.LoggedUser ? null : (
        <div
          style={{
            marginLeft: "10px",
            padding: "10px",
            background: "rgb(214, 67, 67)",
            borderRadius: "0 15px 15px 15px",
            width: "400px",
            fontSize: "16px",
            color: "white",
            marginBottom: "10px",
            fontWeight: "bold"
          }}
        >
          Aby dodać wydarzenia do Twojej listy, zaloguj się!
        </div>
      )}
      <WrappedMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js"}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        {...props}
      />
    </div>
  );
}
export function DivOnMap(props) {
  return (
    <div style={{ width: "50%" }}>
      <Map
        //  addMyEvent={props.addMyEvent}
        //  removeMyEvent={props.removeMyEvent}
        //  myEvents={props.myEvents}
        {...props}
      />
    </div>
  );
}
