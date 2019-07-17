import React, { useState } from "react"

const LocationContext = React.createContext()

export const LocationProvider = props => {
    const [locationId, setLocationId] = useState("")

    function setCurrentId(eventId) {
        setLocationId(eventId)
    }
    console.log(locationId)

    return (
        <LocationContext.Provider
            value={{
                setCurrentId
            }}
            {...props}
        />
    )
}

export const LocationConsumer = LocationContext.Consumer
