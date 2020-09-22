import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Dashboard from "../dashboardComponents/Dashboard";
import RecipeEdit from "../dashboardComponents/RecipeEdit";
import AddRecipes from "../dashboardComponents/FamilyRecipesForm";
import Home from "../components/Home";
import Recipe from "../dashboardComponents/Recipe";
import PrivateRoute from "./PrivateRoute";

import "../App.css";

const HomeRouting = () => {
  return (
    <div>
      <h1>Secret Family Recipes!</h1>
      <div className="links">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/protected">Dashboard</Link>
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <PrivateRoute exact path="/protected" component={Dashboard} />
        <Route path="/edit/:id" component={RecipeEdit} />
        <Route path="/addRecipes" component={AddRecipes} />
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default HomeRouting;
