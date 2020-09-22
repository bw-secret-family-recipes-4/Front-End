import React, { useState } from "react";

const initialForm = {
  ingredients: "",
};

const AddRecipes = () => {
  const [form, setform] = useState(initialForm);

  const submit = () => {
    setform(initialForm);
  };
  // REMEMBER TO GET USER ID FROM THE LOCAL STORAGE WHEN POSTING OTHER WISE IT WILL FAIL!!!!
  return (
    <>
      <form onSubmit={submit}>
        <label>
          Ingredient:
          <input type="text" value={form.ingredients} />
        </label>
        <button>Add Recipe</button>
      </form>
    </>
  );
};
export default AddRecipes;
