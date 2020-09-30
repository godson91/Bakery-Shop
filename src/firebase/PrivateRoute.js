import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        // if user is signed in
        !!currentUser ? (
          // render route component
          <RouteComponent {...routeProps} />
        ) : (
          // if not, redirect to login
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
