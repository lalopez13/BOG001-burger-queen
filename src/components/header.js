import React from "react";
import logo from "../assets/hamburguer.png";
import ordersIcon from "../assets/waiter-alert.png"
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
          <div onClick={()=>{alert('order!!!!')}} className="orders-alert">
          <div className="pending-order">2</div>
          <img className="waiter-alert" src={ordersIcon} alt="icon" />
          </div>
          <div>
            <p onClick={()=>{alert('hola')}}className="menu">&#x2630;</p>
          </div>
        </nav>
      </div>
    );
}
export default Header;