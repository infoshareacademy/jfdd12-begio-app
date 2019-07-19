import firebase from "firebase"
import { mapObjectToArray } from "../utils/mapObjectToArray"
export const fetchMyEvents = () => {
    const EventsRef = firebase.database().ref("events")

    let events = EventsRef.once("value").then(snapshot => {
        const value = snapshot.val()
        return mapObjectToArray(value)
    })
    return events
}

export const addEvents = eventId => {
    const uid = "28b919ba-7570-477a-9fe1-67d7729d5bb5"
    const userEventsReference = `users/${uid}/events`
    let userEvents = fetchMyEvents()
    //   const userId = firebase.auth().currentUser.uid;

    const eventsUpdate =
        userEvents instanceof Array ? [...userEvents, eventId] : [eventId]
    // const eventsUpdate = [1, 2]

    firebase
        .database()
        .ref(userEventsReference)
        .set(eventsUpdate)
}
