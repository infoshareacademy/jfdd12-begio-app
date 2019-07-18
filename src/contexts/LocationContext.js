import React, { useState } from "react"

const LocationContext = React.createContext()

export const LocationProvider = props => {
    const [selectedEvent, setSelectedEvent] = useState(null)

    return (
        <LocationContext.Provider
            value={{
                selectedEvent,
                setSelectedEvent
            }}
            {...props}
        />
    )
}

export const LocationConsumer = LocationContext.Consumer
