import React, { useState, useEffect } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Dashboard from "../dashboardComponents/Dashboard";
import RecipeEdit from "../dashboardComponents/RecipeEdit";
import AddRecipes from "../dashboardComponents/FamilyRecipesForm";
import Home from "../components/Home";
import Recipe from "../dashboardComponents/Recipe";
import PrivateRoute from "./PrivateRoute";
import { RecipesContext } from "../utils/RecipesContext";
import axiosWithAuth from "./axiosWithAuth";
import "../App.css";

const HomeRouting = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axiosWithAuth()
      .get(`/recipes/users/${localStorage.getItem("user_id")}	`)
      .then((res) => {
        setRecipes(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(recipes);
  useEffect(() => {
    getRecipes();
  }, []);

  // const logOut = () => {
  //   if (localStorage.clear()) {
  //     return <Redirect to="/login" />;
  //   }
  // };
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
      <RecipesContext.Provider value={{ recipes, getRecipes }}>
        <Switch>
          <PrivateRoute exact path="/protected" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/edit/:id" component={RecipeEdit} />
          <Route path="/addRecipes" component={AddRecipes} />
          <Route path="/recipe/:id" component={Recipe} />
          <Route path="/" component={Home} />
        </Switch>
      </RecipesContext.Provider>
    </div>
  );
};

export default HomeRouting;
