import React from "react";
import { Link } from "react-router-dom";
import FamilyRecipes from "./FamilyRecipes";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <FamilyRecipes />
      <div>
        <Link to="addRecipes">Add Recipe</Link>
      </div>
    </div>
  );
};

export default Dashboard;
