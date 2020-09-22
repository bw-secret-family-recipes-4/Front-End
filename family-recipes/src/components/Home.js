import Axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from './cards'

const Home = () => {
  const [prc,setprc] = useState([])
  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=151&limit=20`)
    .then((res) => {
      console.log(res)
      setprc(res.data.results)
      
    })

  },[])
    
  const newArray = [...prc]
  console.log(newArray)
    return (
    <div>
      <h1>Public Recipes</h1>
      {newArray.map(eachCard => {
        return(
          <Cards  data = {eachCard}/>
        )
      })}
    </div>
    )

};

export default Home;
