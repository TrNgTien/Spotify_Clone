import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuthen = useSelector((state) => state.login.isAuthen);
  console.log("check", isAuthen);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthen === true ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: routeProps.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
