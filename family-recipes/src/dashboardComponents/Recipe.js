import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Recipe = () => {
  const parmas = useParams();
  const [details, setDetails] = useState([]);

  const getDetails = () => {
    axiosWithAuth()
      .get(`/recipes/${parmas.id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDetails();
  });
  return (
    <>
      <div>
        <h1>{details.title}</h1>
        <div>
          <h2>Recipe Source: {details.source}</h2>
          <p>Ingredients Needed: {details.ingredients}</p>
          <p>Instructions: {details.steps}</p>
        </div>
      </div>
      <Link to="/protected">To Dashboard</Link>
    </>
  );
};

export default Recipe;
