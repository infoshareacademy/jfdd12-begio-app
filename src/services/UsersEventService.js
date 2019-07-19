import firebase from "firebase"
// import { mapObjectToArray } from "../utils/mapObjectToArray"

export const addEvents = MyEvents => {
    const uid = "28b919ba-7570-477a-9fe1-67d7729d5bb5"
    const userEventsReference = `users/${uid}`
    //   const userId = firebase.auth().currentUser.uid;

    const data = {
        events: MyEvents
    }

    firebase
        .database()
        .ref(userEventsReference)
        .set(data)
}
