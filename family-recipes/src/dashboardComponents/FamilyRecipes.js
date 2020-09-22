import React from "react";
import { Link } from "react-router-dom";

import "./dashboard.css";

const FamilyRecipes = () => {
  return (
    <>
      Individualt recipes here
      <div>
        <Link to="/edit">Edit</Link> {/* THis needs to be in the map function for the person*/}
      </div>
    </>
  );
};

export default FamilyRecipes;
