import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      Chicken
      <Switch>
        <Route to="/Login">
          <Login />
        </Route>
        <Route></Route>
      </Switch>
    </>
  );
}

export default App;
