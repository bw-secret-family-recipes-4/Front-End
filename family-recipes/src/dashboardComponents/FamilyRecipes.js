import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { RecipesContext } from "../utils/RecipesContext";

import "./dashboard.css";

const FamilyRecipes = () => {
  const history = useHistory();
  const { recipes } = useContext(RecipesContext);
  console.log(recipes);
  return (
    <>
      <div>
        {recipes.map((eachRecipe) => {
          return (
            <div key={eachRecipe.id}>
              <div onClick={() => history.push(`/recipe/${eachRecipe.id}`)}>
                <h1>{eachRecipe.title}</h1>
                <h2>Author: {eachRecipe.source}</h2>
                <h3>Category: {eachRecipe.category}</h3>
              </div>
              <Link to={`/edit/${eachRecipe.id}`}>Edit</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FamilyRecipes;
