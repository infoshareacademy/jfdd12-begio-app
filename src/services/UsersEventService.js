import firebase from "firebase"
import { mapObjectToArray } from "../utils/mapObjectToArray"

export const fetchMyEvents = callback => {
    const uid = "28b919ba-7570-477a-9fe1-67d7729d5bb5"
    const userEventsReference = `users/${uid}/events`
    const myEventsRef = firebase.database().ref(userEventsReference)

    myEventsRef.on("value", snapshot => {
        const value = snapshot.val()
        const myEventsIds = Object.values(value)
        // const myEvents = mapObjectToArray(value)

        callback(myEventsIds)
    })

    return myEventsRef
}

export const addEvents = eventId => {
    const uid = "28b919ba-7570-477a-9fe1-67d7729d5bb5"
    const userEventsReference = `users/${uid}/events`

    const eventsUpdate = eventId
    // const eventsUpdate = [1, 2]

    firebase
        .database()
        .ref(userEventsReference)
        .push(eventsUpdate)

    //   const userId = firebase.auth().currentUser.uid
}
