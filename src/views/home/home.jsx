import React from "react";
import Button from "../../components/primaryButton.jsx";
import { Link } from "react-router-dom";
import bqueen from "../../assets/bqueen-home.svg";
import {DeviceMesssagePhone} from "../../components/deviceMessage"
import "./home.scss";

function Home() {
  return (
    <div className="home-container">
    <div className="home-box">
      <img className="home-img" src={bqueen} alt="home" />
      <h1>BURGUER QUEEN</h1>
      <Link to="/rol">
        <div className="btn-init">
          <Button id="start" label="START" />
        </div>
      </Link>
      </div>
      <DeviceMesssagePhone />
    </div>
  );
}

export default Home;
