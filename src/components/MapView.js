import React, { useState } from "react"
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps"
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer"
import { NavLink } from "react-router-dom"
import EventView from "../components/EventView"
import deny from "../assets/deny.png"
import Modal from "react-modal"
import { InfoWindowView } from "./InfoWindowView"
import { LocationConsumer } from "../contexts/LocationContext"
import { useAuth } from "../hooks/useAuth.js"
import mapstyles from "./mapstyles"
Modal.setAppElement("#root")
class Map extends React.Component {
    state = {
        showEventDetails: false
    }

    toggleEventDetails = () => {
        this.setState({
            showEventDetails: !this.state.showEventDetails
        })
    }
    render() {
        return (
            <div>
                <LocationConsumer>
                    {value => (
                        <GoogleMap
                            onClick={() => {
                                value.setSelectedEvent(null)
                            }}
                            options={{

                                mapTypeControl: false,
                                fullscreenControl: false,
                                streetViewControl: false,
                                showingInfoWindow: true,
                                minZoom: 13,
                                styles: mapstyles
                            }}
                            defaultZoom={13}
                            defaultCenter={{ lat: 54.369398, lng: 18.594568 }}
                        >
                            <MarkerClusterer enableRetinaIcons gridSize={40}>
                                {this.props.events.map((event, index) => (
                                    <LocationConsumer key={index}>
                                        {value => (
                                            <Marker
                                                key={event.id}
                                                position={{
                                                    lat:
                                                        event.address.location
                                                            .lat,
                                                    lng:
                                                        event.address.location
                                                            .lng
                                                }}
                                                onClick={() => {
                                                    value.setSelectedEvent(
                                                        event
                                                    )
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
                                                        lat:
                                                            value.selectedEvent
                                                                .address
                                                                .location.lat,
                                                        lng:
                                                            value.selectedEvent
                                                                .address
                                                                .location.lng
                                                    }}
                                                    onCloseClick={() => {
                                                        value.setSelectedEvent(
                                                            null
                                                        )
                                                    }}
                                                >
                                                    <InfoWindowView
                                                        addMyEvent={
                                                            this.props
                                                                .addMyEvent
                                                        }
                                                        removeMyEvent={
                                                            this.props
                                                                .removeMyEvent
                                                        }
                                                        myEvents={
                                                            this.props.myEvents
                                                        }
                                                        event={
                                                            value.selectedEvent
                                                        }
                                                        toggleEventDetails={
                                                            this
                                                                .toggleEventDetails
                                                        }
                                                    />
                                                </InfoWindow>
                                            )
                                        )
                                    }}
                                </LocationConsumer>
                            </MarkerClusterer>
                        </GoogleMap>
                    )}
                </LocationConsumer>
                {this.state.showEventDetails && (
                    <Modal
                        style={{
                            overlay: {
                                zIndex: 10,
                                backgroundColor: "rgba(192,192,192, 0.75)"
                            },
                            content: {
                                width: "80%",
                                height: "80%",
                                position: "absolute",
                                margin: "auto",
                                border: "1px solid #ccc",
                                background: "#fff",
                                overflow: "auto",
                                WebkitOverflowScrolling: "touch",
                                borderRadius: "4px",
                                outline: "none",
                                padding: "20px"
                            }
                        }}
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
                                        addMyEvent={this.props.addMyEvent}
                                        removeMyEvent={this.props.removeMyEvent}
                                        myEvents={this.props.myEvents}
                                        event={value.selectedEvent}
                                        toggleEventDetails={
                                            this.toggleEventDetails
                                        }
                                    />
                                )
                            }}
                        </LocationConsumer>
                    </Modal>
                )}
            </div>
        )
    }
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
export function MapView(props) {
    const [message, setMessage] = useState("open")

    const closeLogOutMessage = () => {
        setMessage("closed")
    }
    const loggedUser = useAuth()
    return (
        <div style={{ flexBasis: "50%", height: "85vh" }}>
            {loggedUser || message === "closed" ? null : (
                <div
                    style={{
                        position: "fixed",
                        marginTop: "10px",
                        zIndex: 2,
                        marginLeft: "10px",
                        padding: "18px",
                        background: "rgb(177, 177, 241)",
                        borderRadius: "0 15px 15px 15px",
                        width: "300px",
                        fontSize: "16px",
                        color: "white",
                        marginBottom: "10px"
                    }}
                >
                    <button
                        onClick={closeLogOutMessage}
                        style={{
                            borderRadius: "5px",
                            color: "rgb(73, 64, 109)",
                            float: "right",
                            background: "white",
                            border: "none",
                            padding: "3px 7px",
                            cursor: "pointer"
                        }}
                    >
                        x
                    </button>
                    <img alt="deny" style={{ width: "8%" }} src={deny} />
                    Aby dodawać wydarzenia do Twojej listy,{" "}
                    <NavLink
                        style={{ color: "white", fontWeight: "bold" }}
                        to="/login"
                        exact
                    >
                        zaloguj się
                    </NavLink>
                </div>
            )}
            <WrappedMap
                googleMapURL={
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyBjbSX619TpTJBp9afQKJUuueKAF9ZGawc"
                }
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                {...props}
            />
        </div>
    )
}
export function DivOnMap(props) {
    return (
        <div style={{ width: "50%" }}>
            <Map

                {...props}
            />
        </div>
    )
}
