import { useState, useEffect } from "react"
import { fetchEvents } from "../services/EventService"
// import { useUsers } from "../hooks/useUsers";
// import { groupMessagesWithAuthors } from "../utils/groupMessagesWithAuthors";

export const useEvents = () => {
    //   const users = useUsers();
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
