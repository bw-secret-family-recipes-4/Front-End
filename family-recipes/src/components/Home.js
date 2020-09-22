import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useEffect, useState } from "react";
import Cards from "./cards";

const Home = () => {
  const [prc, setprc] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/recipes")
      .then((res) => {
        // console.log(res);
        setprc(res.data);
      });
  }, []);

  const newArray = [...prc];

  return (
    <div>
      <h1>Public Recipes</h1>
      {newArray.map((eachCard) => {
        return <Cards key={eachCard.id} data={eachCard} />;
      })}
    </div>
  );
};

export default Home;
