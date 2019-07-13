import React from "react"
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps"
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer"
import events from "../events.json"
import EventView from "../components/EventView"

import Modal from "react-modal"
import { InfoWindowView } from "./InfoWindowView"
class Map extends React.Component {
    state = {
        selectedEvent: null,
        showEventDetails: false
    }

    setSelectedEvent = change => {
        change
            ? this.setState({
                  selectedEvent: change
              })
            : this.setState({
                  selectedEvent: change,
                  showEventDetails: false
              })
    }

    toggleEventDetails = () => {
        this.setState({
            showEventDetails: !this.state.showEventDetails
        })
    }
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
                                    this.setSelectedEvent(event)
                                }}
                            />
                        ))}
                        {this.state.selectedEvent && (
                            <InfoWindow
                                position={{
                                    lat: this.state.selectedEvent.address
                                        .location.lat,
                                    lng: this.state.selectedEvent.address
                                        .location.lng
                                }}
                                onCloseClick={() => {
                                    this.setSelectedEvent(null)
                                }}
                            >
                                <InfoWindowView
                                    event={this.state.selectedEvent}
                                    toggleEventDetails={this.toggleEventDetails}
                                />
                            </InfoWindow>
                        )}
                    </MarkerClusterer>
                </GoogleMap>
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
                        <EventView event={this.state.selectedEvent} />
                    </Modal>
                )}
            </div>
        )
    }
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
export function MapView() {
    return (
        <div style={{ width: "50%", height: "90vh" }}>
            <WrappedMap
                googleMapURL={
                    "https://maps.googleapis.com/maps/api/js"
                }
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}
