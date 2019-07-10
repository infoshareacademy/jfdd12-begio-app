import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Navbar } from "./components/Navbar";

const Root = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/callender" component={App} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
