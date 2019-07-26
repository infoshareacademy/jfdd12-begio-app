import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

export const fetchMyEvents = (callback, uid) => {
    const userEventsReference = `users/${uid}/events`
    const myEventsRef = firebase.database().ref(userEventsReference)

    myEventsRef.on("value", snapshot => {
        const value = snapshot.val()
        const myEventsIds = Object.values(value)

        callback(myEventsIds)
    })

    return myEventsRef
}

export const addEvents = (eventId, uid) => {
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

export const removeEvents = (eventId, uid) => {
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

export const fetchUserName = uid => {
    const userNameRef = `users/${uid}/name`
    const userName = firebase.database().ref(userNameRef)

    return userName.once("value").then(snapshot => {
        return snapshot.val()
    })
}
