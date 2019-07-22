import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "./firebase"
import { LocationProvider } from "./contexts/LocationContext"

ReactDOM.render(
    <LocationProvider>
        <App />
    </LocationProvider>,
    document.getElementById("root")
)

serviceWorker.unregister()
