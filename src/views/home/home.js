import React from "react";
import Button from "../../components/primaryButton.js";
import { Link } from "react-router-dom";
import bqueen from "../../assets/bqueen-home.svg";
import "./home.scss";

function Home() {
  return (
    <div>
      <h1>Burguer Queen</h1>
      <img className="home-img"src={bqueen} alt="home" />
      <Link to="/rol">
      <div className="btn-init">
      <Button label="START" />  
      </div>
      </Link>
    </div>
  );
}

export default Home;