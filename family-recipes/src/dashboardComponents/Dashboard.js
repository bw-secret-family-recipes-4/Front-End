import React from "react";
import { Link } from "react-router-dom";
import FamilyRecipes from "./FamilyRecipes";

const Dashboard = () => {
  return <>RECIPES Dashboard ALL recipes here
  <FamilyRecipes />
  <Link to="addRecipes">Add Recipe</Link>
  </>;
};

export default Dashboard;
