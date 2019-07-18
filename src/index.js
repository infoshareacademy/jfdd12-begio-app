import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { CheckLogin } from "./components/CheckLogin";
import App from "./App"
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
