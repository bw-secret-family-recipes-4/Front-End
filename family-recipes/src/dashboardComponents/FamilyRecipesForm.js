import React, { useState } from "react";

const initialForm = {
  ingredients: "",
};

const AddRecipes = () => {
  const [form, setform] = useState(initialForm);
  return (
    <>
      <form>
        <label>
          Ingredient:
          <input type="text"  />
        </label>
        <button>Add Recipe</button>
      </form>
    </>
  );
};
export default AddRecipes;
