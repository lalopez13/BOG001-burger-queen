import React from "react";
import Button from "../../components/primaryButton.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Burguer Queen</h1>
      <Link to="/waiter">
         <Button label="WAITER" />  
      </Link>

      <Link to="/chef">
         <Button label="CHEF" />  
      </Link>
     
    </div>
  );
}

export default Home;