import React from "react";
import Button from "../../components/primaryButton.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Burguer Queen</h1>
      <Link to="/waiterOrder">
         <Button label="START" />  
      </Link>
     
    </div>
  );
}

export default Home;