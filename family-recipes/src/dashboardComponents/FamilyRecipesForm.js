import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialForm = {
  title: "",
  source: "",
  category: "",
  ingredient_name: "", //WIll have to loop through
  steps: "",
  user_id: localStorage.getItem("user_id"),
};

const AddRecipes = () => {
  const [form, setform] = useState(initialForm);

  // Seting inputs to state.

  const formChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  //Sending the data to the backend
  const submit = () => {
    const recipe = {
      title: form.title.trim(),
      source: form.source.trim(),
      category: form.category.trim(),
      ingredient_name: form.ingredient_name.trim(),
      steps: form.steps.trim(),
      user_id: localStorage.getItem("user_id"),
    };
    postRecipe(recipe);
    setform(initialForm);
  };

  const postRecipe = (recipe) => {
    axiosWithAuth()
      .post("/recipes", recipe)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // REMEMBER TO GET USER ID FROM THE LOCAL STORAGE WHEN POSTING OTHER WISE IT WILL FAIL!!!!
  return (
    <>
      <form onSubmit={submit}>
        <label>
          Recipe Name:
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={formChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="source"
            value={form.source}
            onChange={formChange}
          />
        </label>
        <label>
          Catagory:
          <select name="category" onChange={formChange}>
            <option> Choose A Catagory!</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Home">Home</option>
            <option value="I Have No Idea">I Have No Idea</option>
          </select>
        </label>
        <textarea
          cols="100"
          row="100"
          name="ingredient_name"
          value={form.ingredient_name}
          placeholder="Type your ingredients here seperated by a coma. EX: sugar, beans, ..."
          onChange={formChange}
        />
        <textarea
          cols="100"
          row="100"
          name="steps"
          value={form.steps}
          placeholder="Type your instructions here"
          onChange={formChange}
        />
        <button>Add Recipe</button>
      </form>
    </>
  );
};
export default AddRecipes;
