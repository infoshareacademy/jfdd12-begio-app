import React, {useEffect}from 'react'
import EventsCalendar  from '../Calendar'
import { EventList } from "../EventList"

function UserProfile(props){
    console.log(props.myFuckingEvents)
return props.myFuckingEvents ? <> <EventList  myEvents={props.myEvents}
setFavourite={props.setMyEvents}
events={props.myFuckingEvents}
addMyEvent={props.addMyEvent}
removeMyEvent={props.removeMyEvent}
/>
<EventsCalendar events = {props.events} userEvents = {props.myEvents}/> 
</>
: 
<EventsCalendar events = {props.events} userEvents = {props.myEvents}/> 

}

export default UserProfile