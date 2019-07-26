import firebase from "firebase/app"
import "firebase/database"
import { mapObjectToArray } from "../utils/mapObjectToArray"

export const fetchEvents = callback => {
    const EventsRef = firebase.database().ref("events")

    EventsRef.on("value", snapshot => {
        const value = snapshot.val()
        const events = mapObjectToArray(value)

        callback(events)
    })

    return EventsRef
}
