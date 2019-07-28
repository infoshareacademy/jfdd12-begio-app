import React, { useState } from "react"
import { GoButton } from "./GoButton"
import "./EventListElement.css"
import MaterialIcon from "material-icons-react"
import ReactModal from "react-modal"
import EventView from "../components/EventView"
import { LocationConsumer } from "../contexts/LocationContext"
ReactModal.setAppElement("#root")
export function EventListElement(props) {
    const modalStyles = {
        overlay: { zIndex: 10, backgroundColor: "rgba(192,192,192, 0.75)" },
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
    }

    const {
        event,
        addMyEvent,
        removeMyEvent,
        myEvents,
        isOnUserProfile
    } = props
    const [showModal, setShowModal] = useState(false)

    const handleModal = toogle => {
        setShowModal(toogle)
    }
    let month = event.startDate.month

    switch (month) {
        case 1:
            month = "stycznia"
            break
        case 2:
            month = "lutego"
            break
        case 3:
            month = "marca"
            break
        case 4:
            month = "kwietnia"
            break
        case 5:
            month = "maja"
            break
        case 6:
            month = "czerwca"
            break
        case 7:
            month = "lipca"
            break
        case 8:
            month = "sierpnia"
            break
        case 9:
            month = "września"
            break
        case 10:
            month = "października"
            break
        case 11:
            month = "listopada"
            break
        case 12:
            month = "grudnia"
            break

        default:
            month = "Err: Brak nazwy miesiąca"
            break
    }


    return (
        <li className="listElement">
            <div className="eventInfo">
                <div className="photoContainer">
                    <img
                        className="imageElement"
                        src={event.images[0]}
                        alt={event.title}
                        onClick={() => handleModal(!showModal)}
                    />
                </div>
                <div className="eventNameDatePlace">
                    <div
                        className="eventTitle"
                        onClick={() => handleModal(!showModal)}
                    >
                        {event.title}
                    </div>
                    <div>
                        <div className="placeDateTime">
                            <LocationConsumer>
                                {value => {
                                    return isOnUserProfile ? (
                                        <div className="placeDateTime">
                                            <div className="materialIcon">
                                                <MaterialIcon icon="place" />
                                            </div>
                                            <div className="placeDateTimeBody">
                                                {event.address.street}{" "}
                                                {event.address.houseNumber}
                                            </div>
                                        </div>
                                    ) : (
                                            <div
                                                className="placeDateTime"
                                                onClick={() =>
                                                    value.setSelectedEvent(event)
                                                }
                                            >
                                                <div className="materialIcon">
                                                    <MaterialIcon icon="place" />
                                                </div>
                                                <div onClick={props.hideList}
                                                    style={{ cursor: "pointer" }}
                                                    className="placeDateTimeBody"
                                                >
                                                    {event.address.street}{" "}
                                                    {event.address.houseNumber}
                                                </div>
                                            </div>
                                        )
                                }}
                            </LocationConsumer>
                        </div>
                    </div>
                    <div>
                        <div className="placeDateTime">
                            <div className="materialIcon">
                                <MaterialIcon icon="date_range" />
                            </div>
                            <div className="placeDateTimeBody">
                                {event.startDate.day !== event.endDate.day &&
                                    event.startDate.month === event.endDate.month
                                    ? `${event.startDate.day} -  ${
                                    event.endDate.day
                                    }`
                                    : event.startDate.day}
                                {` ${month} `}
                                {event.startDate.year}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="placeDateTime">
                            <div className="materialIcon">
                                <MaterialIcon icon="access_time" />
                            </div>
                            <div className="placeDateTimeBody">
                                {event.startDate.time.hour}:
                                {event.startDate.time.minute}
                                {" - "}
                                {event.endDate.time.hour}:
                                {event.endDate.time.minute}
                            </div>
                        </div>
                    </div>
                    <ReactModal
                        style={modalStyles}
                        isOpen={showModal}
                        onRequestClose={() => handleModal(!showModal)}
                        myEvents={myEvents}
                        addMyEvent={addMyEvent}
                        removeMyEvent={removeMyEvent}
                    >
                        <button
                            onClick={() => handleModal(!showModal)}
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                float: "right",
                                borderRadius: "8px",
                                color: "white",
                                border: "none",
                                background: "rgb(68, 66, 105)"
                            }}
                        >
                            X
                        </button>
                        <EventView
                            event={event}
                            myEvents={myEvents}
                            addMyEvent={addMyEvent}
                            removeMyEvent={removeMyEvent}
                        />
                    </ReactModal>
                </div>
            </div>
            <div className="eventButton">
                <GoButton
                    addMyEvent={addMyEvent}
                    removeMyEvent={removeMyEvent}
                    event={event}
                    myEvents={myEvents}
                />
            </div>
        </li>
    )
}
