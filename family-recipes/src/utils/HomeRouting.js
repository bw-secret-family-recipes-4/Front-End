import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
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
import { Links, Header, DivLinks } from "../components.style";

const HomeRouting = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axiosWithAuth()
      .get(`/recipes/users/${localStorage.getItem("user_id")}	`)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Header>
      <h1>Secret Family Recipes!</h1>
      <Links className="links">
        <DivLinks>
          <Link to="/">Home</Link>
        </DivLinks>
        <DivLinks>
          <Link to="/login">Login</Link>
        </DivLinks>
        <DivLinks>
          <Link to="/protected">Dashboard</Link>
        </DivLinks>
      </Links>
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
    </Header>
  );
};

export default HomeRouting;
