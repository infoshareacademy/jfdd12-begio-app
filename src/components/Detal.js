
import React from "react";
import calendar from "./cal.png";
import { PhotoGallery } from "./Carusel"
export function Detal(props) {
    return (
        <>
            <h2>{props.title}</h2><button>GO!</button>
            <PhotoGallery one={props.photoOne} two={props.photoTwo} three={props.photoThree} />
            <p>{props.city} {props.street} {props.houseNumber}</p>
            <p><img style={{ width: "3%", marginRight: "5px" }} alt="cal" src={calendar} />
                <i>{props.day}. {props.month}. {props.year}</i>
            </p>
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>Opis:</p>
            <div style={{ padding: "10px", borderRadius: "10px", fontSize: "12px", border: "1.3px solid grey" }}>{props.description}</div>
        </>
    );
}
