import React, { useState } from "react"
import { useMyEvents } from "../hooks/useMyEvents"

export const LocationContext = React.createContext()

export const LocationProvider = props => {
    const myEvents = useMyEvents()
    const [selectedEvent, setSelectedEvent] = useState(null)

    return (
        <LocationContext.Provider
            value={{
                selectedEvent,
                setSelectedEvent,
                myEvents
            }}
            {...props}
        />
    )
}

export const LocationConsumer = LocationContext.Consumer
