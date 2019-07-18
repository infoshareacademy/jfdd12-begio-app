import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Login } from "./components/Login";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<Login />, document.getElementById("root"));

serviceWorker.unregister();
