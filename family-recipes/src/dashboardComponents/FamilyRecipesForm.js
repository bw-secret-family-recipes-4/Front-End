import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { RecipesContext } from "../utils/RecipesContext";
import { StyledF, LabelText,Button } from "../components.style";

const initialForm = {
  title: "",
  source: "",
  category: "",
  ingredients: "",
  steps: "",
  user_id: localStorage.getItem("user_id"),
};

const AddRecipes = () => {
  const [form, setform] = useState(initialForm);
  const history = useHistory();
  const { getRecipes } = useContext(RecipesContext);
  // Seting inputs to state.

  const formChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  //Sending the data to the backend

  const postRecipe = (recipe) => {
    axiosWithAuth()
      .post("/recipes", recipe)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    const recipe = {
      title: form.title.trim(),
      source: form.source.trim(),
      category: form.category.trim(),
      ingredients: form.ingredients.trim(),
      steps: form.steps.trim(),
      user_id: localStorage.getItem("user_id"),
    };
    postRecipe(recipe);
    setform(initialForm);
    history.push("/protected");
    getRecipes();
  };
  // REMEMBER TO GET USER ID FROM THE LOCAL STORAGE WHEN POSTING OTHER WISE IT WILL FAIL!!!!
  return (
    <>
      <StyledF onSubmit={submit}>
        <LabelText>
          Recipe Name:
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={formChange}
          />
        </LabelText>
        <LabelText>
          Author:
          <input
            type="text"
            name="source"
            value={form.source}
            onChange={formChange}
          />
        </LabelText>
        <LabelText>
          Catagory:
          <select name="category" onChange={formChange}>
            <option> Choose A Catagory!</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Home">Home</option>
            <option value="I Have No Idea">I Have No Idea</option>
          </select>
        </LabelText>
        Ingredients
        <textarea
          cols="100"
          row="100"
          name="ingredients"
          value={form.ingredients}
          placeholder="Type your ingredients here ..."
          onChange={formChange}
        />
        Instructions
        <textarea
          cols="100"
          row="100"
          name="steps"
          value={form.steps}
          placeholder="Type your instructions here"
          onChange={formChange}
        />
        <Button>Add Recipe</Button>
      </StyledF>
    </>
  );
};
export default AddRecipes;
