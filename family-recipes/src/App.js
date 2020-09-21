import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./dashboardComponents/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <h1> Welcome To Secret Family Recipes!</h1>
      <div className="links">
        <div>
      <Link to="/">Home</Link>
      </div>
      <div>
      <Link to="/login">Login/Sign Up</Link>
      </div>
      <div>
      <Link to="/dashboard"> Dashboard</Link>
      </div>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="" />
      </Switch>
    </>
  );
}

export default App;
