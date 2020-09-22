import React from "react";
import { Link } from "react-router-dom";
import FamilyRecipes from "./FamilyRecipes";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <Link to="addRecipes">Add Recipe</Link>
      </div>
      <FamilyRecipes />
    </div>
  );
};

export default Dashboard;
