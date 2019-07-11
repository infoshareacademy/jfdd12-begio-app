import React from "react";
export function InfoWindowView({ event, toggleEventDetails }) {
    return (
        <>
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
                    src={event.images[0]}
                />
                <p>
                    <p style={{ color: "blue", cursor: "pointer" }} onClick={toggleEventDetails}>
                        {event.title}
                    </p>
                    <br />
                    {event.address.city},{" "}
                    {event.address.street}{" "}
                    {event.address.houseNumber}
                    <br />
                    <b>
                        {event.startDate.day}.
                      {event.startDate.month}.
                      {event.startDate.year}
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
        </>
    );
}