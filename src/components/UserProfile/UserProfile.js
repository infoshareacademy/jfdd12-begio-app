import React, { useEffect, useState } from 'react';
import EventsCalendar from '../Calendar';
import { EventList } from '../EventList';
import './UserProfile.css'
import { UserMessage } from "./UserMessage"

function UserProfile(props) {
    const myFuckingEvents = props.events.filter(event =>
        props.myEvents.includes(event.id))

    return props.myEvents.length !== 0
        ?
        <div className="containterProfile">

            <div className="eventsList">
                <EventList style={{ marginTop: "800px" }}
                    myEvents={props.myEvents}
                    setFavourite={props.setMyEvents}
                    events={myFuckingEvents}
                    addMyEvent={props.addMyEvent}
                    removeMyEvent={props.removeMyEvent}
                />
            </div>
            <div style={{ width: '100%', flexBasis: '50%' }}>
                <p className="userMessage"><UserMessage userName={props.user.name} myEvents={props.myEvents} /></p>
                <EventsCalendar events={props.events} userEvents={props.myEvents} />
            </div>
        </div>
        :
        <div className="containterProfile">




            <div style={{ width: '100%' }}>
                <p className="userMessage"><UserMessage userName={props.user.name} myEvents={props.myEvents} /></p>
                <EventsCalendar myEvents={props.myEvents} events={props.events} userEvents={props.myEvents} />
            </div>
        </div>
}

export default UserProfile