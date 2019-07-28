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

    hideList = () => {
        this.setState({ listUp: false });
    }
    render() {
        return (
            <div
                className={this.state.listUp === false ? "eventList" : "eventListUp"}
            >
                <button onClick={this.showList} className="showListButton">

                    {this.state.listUp === false ? "▲" : "▼"}
                </button>
                <ul className={this.state.listUp === false ? "list" : "listWithScroll"}>
                    {this.props.events.map(event => (
                        <EventListElement
                            hideList={this.hideList}
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
