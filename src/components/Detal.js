
import React from "react";
import calendar from "./cal.png";
import { PhotoGallery } from "./Carusel"
export function Detal(props) {
    return (
        <>
            <center><h3 style={{ marginBottom: "0" }}>{props.title} <button style={{ marginBottom: "5px" }}>GO!</button></h3></center>
            <p>{props.city} {props.street} {props.houseNumber}</p>
            <p><img style={{ width: "3%", marginRight: "5px" }} alt="cal" src={calendar} />
                <i style={{ marginBottom: "10px" }}>{props.day}. {props.month}. {props.year}</i>
            </p>
            <PhotoGallery one={props.photoOne} two={props.photoTwo} three={props.photoThree} />
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>Opis:</p>
            <div style={{ padding: "10px", borderRadius: "10px", fontSize: "12px", border: "1.3px solid grey" }}>{props.description}</div>
        </>
    );
}
