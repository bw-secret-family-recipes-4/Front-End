import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

import "./dashboard.css";

const FamilyRecipes = () => {
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axiosWithAuth()
      .get(`/recipes/users/${localStorage.getItem("user_id")}	`)
      .then((res) => {
        setRecipes(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);
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
