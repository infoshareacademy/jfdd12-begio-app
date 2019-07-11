import React, {useEffect}from 'react'
import EventsCalendar  from '../Calendar'
import { EventList } from "../EventList"

function UserProfile(props){
    console.log(props.myFuckingEvents)
return <div>
    <EventList  myEvents={props.myEvents}
                setFavourite={props.setMyEvents}
                events={props.myFuckingEvents}
                addMyEvent={props.addMyEvent}
                removeMyEvent={props.removeMyEvent}
            />
    <EventsCalendar events = {props.events} userEvents = {props.myEvents}/>
    </div>
}

export default UserProfile