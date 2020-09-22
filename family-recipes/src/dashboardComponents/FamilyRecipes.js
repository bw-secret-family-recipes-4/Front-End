import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

import "./dashboard.css";

const FamilyRecipes = () => {
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
      Individualt recipes here
      <div>
        {recipes.map((eachRecipe) => {
          return (
            <div key={eachRecipe.id}>
              <h1>{eachRecipe.title}</h1>
              <h2>Author: {eachRecipe.source}</h2>
              <h3>Category: {eachRecipe.category}</h3>
            </div>
          );
        })}
        <Link to="/edit">Edit</Link>{" "}
        {/* THis needs to be in the map function for the person*/}
      </div>
    </>
  );
};

export default FamilyRecipes;
