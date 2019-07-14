import React from "react";
import { EventName } from "./EventName"
import { EventPlace } from "./EventPlace";
import { EventDate } from "./EventDate";
import { flexbox } from "@material-ui/system";
import './InfoWindowView.css'
export function InfoWindowView({ event, toggleEventDetails }) {
    return (
        
            <div
                style={{
                    width: "80%",
                    height: "50%",
                    backgroundColor: 'black',
                    fontSize: "10px"
                }}
            >
                <img
                    onClick={toggleEventDetails}
                    alt="sd"
                    style={{
                        cursor: "pointer",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%"
                    }}
                    src={event.images[0]}

                />
                <p>
                    <p style={{ fontWeight: "bold", color: "rgb(68, 66, 105)", cursor: "pointer", margin: "0" }} onClick={toggleEventDetails}>
                        <EventName event={event} />
                    </p>

                    <EventPlace event={event} />
                    <br />
                    <b>
                        <EventDate event={event} />
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
    )     
}