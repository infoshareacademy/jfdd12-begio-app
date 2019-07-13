import React, {useEffect, useState} from 'react';
import EventsCalendar  from '../Calendar';
import { EventList } from '../EventList';
import './UserProfile.css'

function UserProfile(props){
const myFuckingEvents = props.events.filter(event =>
        props.myEvents.includes(event.id))


    console.log(myFuckingEvents)
return<div className="containterProfile">
<EventsCalendar events = {props.events} userEvents = {props.myEvents}/> 
{ props.myEvents.length === 0 ? 
<section>Brak wydarzeń</section>
:
 <EventList  myEvents={props.myEvents}
setFavourite={props.setMyEvents}
events={myFuckingEvents}
addMyEvent={props.addMyEvent}
removeMyEvent={props.removeMyEvent}
/> 
}
</div>
}

export default UserProfile