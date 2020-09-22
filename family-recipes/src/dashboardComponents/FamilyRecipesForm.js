import React, { useState } from "react";

const initialAuthor = {
  title: "",
  source: "",
  category: "",
};
const initialIng = {
  ingredient_name: [], //WIll have to loop through
};
const initialInstructions = {
  instructions: "",
};
const AddRecipes = () => {
  const [form, setform] = useState(initialAuthor);
  const [Ingredient, setIngredient] = useState(initialIng);
  const [instructions, setInstrictions] = useState(initialInstructions);

  const submit = () => {
    setform(initialAuthor);
    setIngredient(initialIng);
  };

  const formChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const ingredientsChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setIngredient({ ...Ingredient, ingredient_name: value.split(",") });
  };

  const instructionChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInstrictions({ ...instructions, instructions: value });
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
          value={Ingredient.ingredient_name}
          placeholder="Type your ingredients here seperated by a coma. EX: sugar, beans, ..."
          onChange={ingredientsChange}
        />
        <textarea
          cols="100"
          row="100"
          // name="instructions"
          value={instructions.instructions}
          placeholder="Type your instructions here"
          onChange={instructionChange}
        />
        <button>Add Recipe</button>
      </form>
    </>
  );
};
export default AddRecipes;
