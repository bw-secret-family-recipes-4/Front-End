import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { RecipesContext } from "../utils/RecipesContext";

const initialForm = {
  title: "",
  source: "",
  category: "",
  ingredients: "",
  steps: "",
  user_id: localStorage.getItem("user_id"),
};

const RecipeEdit = () => {
  const history = useHistory();
  const [form, setForm] = useState(initialForm);
  const { getRecipes } = useContext(RecipesContext);
  const params = useParams("/edit/:id");

  const leave = () => {
    setForm(initialForm);
    history.push("/protected");
  };

  const getRecipeDetails = (params) => {
    axiosWithAuth()
      .get(`/recipes/${params.id}`)
      .then((res) => {
        setForm(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRecipeDetails(params);
  }, [params]);

  const formChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = () => {
    axiosWithAuth()
      .put(`/recipes/${params.id}`, form)
      .then((res) => {
        console.log(res);
        getRecipes();
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/protected");
  };
  return (
    <>
      <form onSubmit={() => submit(params)}>
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
          value={form.ingredients}
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
        <button>Submit Edit!</button>
      </form>
      <button onClick={leave}>Cancel and Leave</button>
    </>
  );
};

export default RecipeEdit;
