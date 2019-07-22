import { useState, useEffect } from "react"
import { fetchMyEvents } from "../services/UsersEventService"
import { useEvents } from "./useEvents"

export const useMyEvents = () => {
    const [myEvents, setMyEvents] = useState([])
    const events = useEvents()

    useEffect(() => {
        const EventsRef = fetchMyEvents(myEventsIds => {
            const myEvents = events.filter(event =>
                myEventsIds.includes(event.id)
            )
            setMyEvents(myEvents)
        })

        return () => {
            EventsRef.off("value")
        }
    }, [events])

    return myEvents
}
