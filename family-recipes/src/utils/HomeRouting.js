import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Dashboard from "../dashboardComponents/Dashboard";
import RecipeEdit from "../dashboardComponents/RecipeEdit";
import AddRecipes from "../dashboardComponents/FamilyRecipesForm";
import Home from "../components/Home";

import "../App.css";

const HomeRouting = () => {
  return (
    <Route
      render={() => {
        if (
          window.location.href === "http://http://localhost:3000/home" &&
          "http://http://localhost:3000/home" &&
          "https://front-end-b4xh1g815.vercel.app/home" &&
<<<<<<< HEAD
          "https://front-end-o5uieeqbk.vercel.app/"  
=======
>>>>>>> 54ad2770c9117c6e32abb008f556d798335f9551
        ) {
          return (
            <div>  
              <Home />
              
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/edit" component={RecipeEdit} />
                <Route path="/addRecipes" component={AddRecipes} />
                <Route path="/home" component={Home} />
              </Switch>
            </div>
          );
        } else {
          return (
            <div>
              <div className="links">
                <div>
                  <Link to="/home">Home</Link>
                </div>
                <div>
                  <Link to="/login">Login</Link>
                </div>
                <div>
                  <Link to="dashboard">Dashboard</Link>
                </div>
              </div>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/edit" component={RecipeEdit} />
                <Route path="/addRecipes" component={AddRecipes} />
                <Route path="/home" component={Home} />
              </Switch>
            </div>
          );
        }
      }}
    />
  );
};

export default HomeRouting;
