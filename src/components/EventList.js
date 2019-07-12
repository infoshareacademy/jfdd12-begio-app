import React, { Component } from "react";
import { EventListElement } from "./EventListElement";
import "../EventList.css";

export class EventList extends Component {
  render() {
        return (
            <div>
                <ul className="list">
                    {this.props.events.map(event => (
                        <EventListElement
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
