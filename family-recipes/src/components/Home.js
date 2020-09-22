import Axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from './cards'

const Home = () => {
  const [prc,setprc] = useState([])
  useEffect(() => {
    Axios.get('https://secret-family-recipes-bw.herokuapp.com/')
    .then((res) => {
      console.log(res)
      setprc(res)
      
    })

  },[])
    
  const newArray = [...prc]
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
