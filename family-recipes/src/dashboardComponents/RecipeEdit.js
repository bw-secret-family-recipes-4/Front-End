import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { RecipesContext } from "../utils/RecipesContext";
import { StyledF, LabelText, Button } from "../components.style";

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
        getRecipes();
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/protected");
  };
  return (
    <>
      <StyledF onSubmit={() => submit(params)}>
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
          name="ingredient_name"
          value={form.ingredients}
          placeholder="Type your ingredients here..."
          onChange={formChange}
        />
        Instructions:
        <textarea
          cols="100"
          row="100"
          name="steps"
          value={form.steps}
          placeholder="Type your instructions here..."
          onChange={formChange}
        />
        <Button>Submit Edit!</Button>
      </StyledF>
      <Button onClick={leave}>Cancel and Leave</Button>
    </>
  );
};

export default RecipeEdit;
