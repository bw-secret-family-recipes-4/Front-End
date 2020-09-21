import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./dashboardComponents/Dashboard";
import RecipeEdit from "./dashboardComponents/RecipeEdit";
import AddRecipes from "./dashboardComponents/FamilyRecipesForm";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <><div>
      {/* {!Home ? } */}
    </div>
      <Home />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/edit" component={RecipeEdit} />
        <Route path="/addRecipes" component={AddRecipes} />
        <Route path="" />
      </Switch>
    </>
  );
}

export default App;
