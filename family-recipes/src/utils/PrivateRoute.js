import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
//   const history = useHistory();
  return (
    <Route
        {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
          //   history.push("/protected");
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
