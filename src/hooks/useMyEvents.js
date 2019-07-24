import { useState, useEffect } from "react"
import { fetchMyEvents } from "../services/UsersEventService"
import { useEvents } from "./useEvents"
import { useAuth } from "../hooks/useAuth"

export const useMyEvents = () => {
    const [myEvents, setMyEvents] = useState([])
    const events = useEvents()
    const loggedUser = useAuth()
    const uid = loggedUser && loggedUser.uid

    useEffect(() => {
        if (uid) {
            const EventsRef = fetchMyEvents(myEventsIds => {
                const myEvents = events.filter(event =>
                    myEventsIds.includes(event.id)
                )
                setMyEvents(myEvents)
            }, uid)

            return () => {
                EventsRef.off("value")
            }
        }
    }, [events, uid])

    return myEvents
}
