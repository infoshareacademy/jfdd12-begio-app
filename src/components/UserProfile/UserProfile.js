import React, { useContext } from "react"
import EventsCalendar from "../Calendar"
import { EventList } from "../EventList"
import "./UserProfile.css"
import { UserMessage } from "./UserMessage"
import { LocationContext } from "../../contexts/LocationContext"
import { useAuth } from "../../hooks/useAuth.js"

function UserProfile(props) {
    const LoggedUser = useAuth()
    const { myEvents } = useContext(LocationContext)

    return  LoggedUser ?  (props.myEvents.length !== 0 ? (
        <div className="containterProfile">

            <div style={{ marginTop: "20px" }} className="eventsList">
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
            <div style={{ marginTop: "20px" }} className="eventsList">
                    <div className="userMessage">
                        <UserMessage
                            userName={props.userName}
                            myEvents={myEvents}
                        />
                    </div>
            </div>
                <div style={{ width: "100%", flexBasis: "50%" }}>
                    <EventsCalendar myEvents={myEvents} />

                </div>
            </div>
        ))
        :
        (
            <div className="noMatchContener">
        <img
            className="noMatchImage"
            src="https://cdn12.picryl.com/photo/2016/12/31/page-not-found-404-error-bc6717-1024.png"
            alt="404 Page Not Found"
        />
        </div>
        )
}

export default UserProfile
