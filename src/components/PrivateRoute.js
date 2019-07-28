import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Dimmer, Loader } from "semantic-ui-react";
import { LoaderForBegio } from "./Loader";

function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = useAuth();

  if (isLoggedIn === null) {
    return (
      <Dimmer active>
        <LoaderForBegio/>
      </Dimmer>
    );
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn === null) {
        }

        return isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;