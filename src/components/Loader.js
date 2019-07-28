import React from 'react'
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react"
import AppLogo from "../assets/logoOfApp.png"

export const LoaderForBegio = () => (
    <div style={{ width: "400px", margin: "30px auto" }}>
        <Segment>
            <Dimmer active inverted>
                <Loader size="massive">Wczytywanie...</Loader>
            </Dimmer>
            <Image src={AppLogo} />
        </Segment>
    </div>
)