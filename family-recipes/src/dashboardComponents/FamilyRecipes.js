import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { RecipesContext } from "../utils/RecipesContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button } from "../components.style";

const FamilyRecipes = () => {
  const history = useHistory();
  const { recipes, getRecipes } = useContext(RecipesContext);

  const deleteRecipe = (id) => {
    axiosWithAuth()
      .delete(`/recipes/${id}`)
      .then((res) => {
        getRecipes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              <Button onClick={() => deleteRecipe(eachRecipe.id)}>
                Delete
              </Button>
              <Button onClick={() => history.push(`/edit/${eachRecipe.id}`)}>
                Edit
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FamilyRecipes;
