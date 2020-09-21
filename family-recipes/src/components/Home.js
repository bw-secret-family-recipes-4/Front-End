import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1> Welcome To Secret Family Recipes!</h1>
      <div className="links">
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/login">Login/Sign Up</Link>
        </div>
        <div>
          <Link to="/dashboard"> Dashboard</Link>
        </div>
      </div>

      Miah do your get request here and all that jazz
    </>
  );
};

export default Home;
