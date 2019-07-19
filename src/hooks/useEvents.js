import { useState, useEffect } from "react"
import { fetchEvents } from "../services/EventService"

export const useEvents = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const EventsRef = fetchEvents(events => {
            setEvents(events)
        })

        return () => {
            EventsRef.off("value")
        }
    }, [])

    return events
}
