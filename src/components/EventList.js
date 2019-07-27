import React, { Component } from "react"
import { EventListElement } from "./EventListElement"
import "./EventList.css"

export class EventList extends Component {
    state = {
        listUp: false
    };
    showList = () => {
        this.setState({ listUp: !this.state.listUp });
    };
    render() {
        return (
            <div
                className={this.state.listUp === false ? "eventList" : "eventListUp"}
            >
                <button onClick={this.showList} className="showListButton">

                    {this.state.listUp === false ? "▲" : "▼"}
                </button>
                <ul className="list">
                    {this.props.events.map(event => (
                        <EventListElement
                            isOnUserProfile={this.props.isOnUserProfile}
                            key={event.id}
                            addMyEvent={this.props.addMyEvent}
                            removeMyEvent={this.props.removeMyEvent}
                            event={event}
                            myEvents={this.props.myEvents}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
