import firebase from "firebase"
import { mapObjectToArray } from "../utils/mapObjectToArray"

export const fetchMyEvents = callback => {
    const uid = "28b919ba-7570-477a-9fe1-67d7729d5bb5"
    const userEventsReference = `users/${uid}/events`
    const myEventsRef = firebase.database().ref(userEventsReference)

    myEventsRef.on("value", snapshot => {
        const value = snapshot.val()
        const myEventsIds = Object.values(value)

        callback(myEventsIds)
    })

    return myEventsRef
}

export const addEvents = eventId => {
    const uid = "28b919ba-7570-477a-9fe1-67d7729d5bb5"
    const userEventsReference = `users/${uid}/events`
    const myEventsRef = firebase.database().ref(userEventsReference)

    const eventsUpdate = eventId
    // const eventsUpdate = [1, 2]
    myEventsRef.once("value").then(snapshot => {
        const value = snapshot.val()
        const myEventsIds = Object.values(value)
        if (myEventsIds.includes(eventId)) {
            return
        } else {
            firebase
                .database()
                .ref(userEventsReference)
                .push(eventsUpdate)
        }
    })

    //   const userId = firebase.auth().currentUser.uid
}

export const removeEvents = eventId => {
    const uid = "28b919ba-7570-477a-9fe1-67d7729d5bb5"
    const userEventsReference = `users/${uid}/events`
    const myEventsRef = firebase.database().ref(userEventsReference)

    // const eventsUpdate = eventId
    // const eventsUpdate = [1, 2]

    myEventsRef.once("value").then(snapshot => {
        const value = snapshot.val()
        const myEventsIds = Object.values(value)
        const index = myEventsIds.indexOf(eventId)
        const firebaseId = Object.keys(value)[index]
        const eventToRemoveRef = firebase
            .database()
            .ref(`users/${uid}/events/${firebaseId}`)
        if (myEventsIds.length === 1) {
            firebase
                .database()
                .ref(userEventsReference)
                .set(0)
        }
        if (myEventsIds.includes(eventId)) {
            eventToRemoveRef.remove()
        } else {
            return
        }
    })
}
