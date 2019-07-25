import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import App from "./App"
import "semantic-ui-css/semantic.min.css"
import "./firebase"
import { AuthProvider } from "./contexts/AuthContext"
import { LocationProvider } from "./contexts/LocationContext"

ReactDOM.render(
    <AuthProvider>
        <LocationProvider>
            <App />
        </LocationProvider>
    </AuthProvider>,
    document.getElementById("root")
)

serviceWorker.unregister()
