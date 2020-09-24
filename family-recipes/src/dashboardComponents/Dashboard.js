import React from "react";
import { Link } from "react-router-dom";
import FamilyRecipes from "./FamilyRecipes";
import { Header } from "../components.style";
import { css } from "emotion";

const Dashboard = () => {
  return (
    <Header>
      <div>
        <Link
          className={css`
            text-decoration: none;
            color: #dad8d8e0;
            padding: 0.2% 2%;
            background-color: #333333;
            border-radius: 5px;
            &:hover {
              background-color: #dad8d8e0;
              color: #333333;
              border: solid #333333;
            }
          `}
          to="addRecipes"
        >
          Add Recipe
        </Link>
      </div>
      <FamilyRecipes />
    </Header>
  );
};

export default Dashboard;
