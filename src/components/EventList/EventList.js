import React, { Component } from "react"
import { EventListElement } from "./EventListElement"
import "./EventList.css"

export class EventList extends Component {
    render() {
        return (
            <div className="eventList">
                <ul className="list">
                    {this.props.events.map(event => (
                        <EventListElement
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