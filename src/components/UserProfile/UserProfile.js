import React, { useContext } from "react"
import EventsCalendar from "../Calendar"
import { EventList } from "../EventList"
import "./UserProfile.css"
import { UserMessage } from "./UserMessage"
import { LocationContext } from "../../contexts/LocationContext"

function UserProfile(props) {
    const { myEvents } = useContext(LocationContext)

    return props.myEvents.length !== 0 ? (
        <div className="containterProfile">

            <div className="eventsList">
                <EventList
                    isOnUserProfile={true}
                    myEvents={myEvents}
                    events={myEvents}
                />
            </div>
            <div className="marginDiv"></div>
            <div style={{ width: "100%", flexBasis: "50%" }}>
                <div className="userMessage">
                    <UserMessage
                        userName={props.userName}
                        myEvents={myEvents}
                    />
                </div>

                <EventsCalendar theme={{ height: 50 }} myEvents={myEvents} />

            </div>
        </div>
    ) : (
            <div className="containterProfile">
                <div style={{ width: "100%" }}>
                    <div className="userMessage">
                        <UserMessage
                            userName={props.userName}
                            myEvents={myEvents}
                        />
                    </div>

                    <EventsCalendar myEvents={myEvents} />

                </div>
            </div>
        )
}

export default UserProfile
