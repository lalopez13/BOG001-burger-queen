import React from "react";
import logo from "../assets/hamburguer.png";
import "../App.scss"

function Header(props){
    return (
      <div className="header-nav">
        <nav>
          <div className="header-item">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="header-text" >
            <h2 className="title">BQUEEN</h2>
            <p className="rol-text">
              {props.rol}
              {props.number}
            </p>
          </div>

          <div></div>
        </nav>
      </div>
    );
}
export default Header;