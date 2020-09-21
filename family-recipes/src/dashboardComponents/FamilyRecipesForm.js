import React, { useState } from "react";

const initialForm = {
  ingredients: "",
};

const AddRecipes = () => {
  const [form, setform] = useState(initialForm);

const submit = () =>{
    setform(initialForm)
}

  return (
    <>
      <form onSubmit={submit}>
        <label>
          Ingredient:
          <input type="text"  value={form.ingredients}/>
        </label>
        <button>Add Recipe</button>
      </form>
    </>
  );
};
export default AddRecipes;
