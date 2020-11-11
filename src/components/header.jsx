import React, { useState } from "react";
import logo from "../assets/hamburguer.png";
import ordersIcon from "../assets/waiter-alert.png";
import { Link } from "react-router-dom";
import "./header.scss";
import usePreparedOrdersCount from './preparedOrdersCount';
import Modal from '../views/modal/modal';
import PreparedOrdersList from '../views/chef/PreparedOrdersList';

function Header(props) {

  const preparedOrdersCount = usePreparedOrdersCount();
  const [open, setOpen] = useState(false);
 
  return (
    <div className="header-nav">
      <div className="header-item">
        <img className="logo" src={logo} width="55" height="55" alt="logo" />
      </div>
      <div className="header-text">
        <h2 className="title">BQUEEN</h2>
        <p className="rol-text">
          {props.rol}
          {props.number}
        </p>
      </div>
      <div className="orders-alert" >
        <div className="pending-order"> {preparedOrdersCount} </div>
        <img className="waiter-alert" src={ordersIcon} alt="icon" width="55" height="55" onClick = {()=>{setOpen(true)}} />
        <Modal open={open} close={() => setOpen(false)}>
            <PreparedOrdersList />
        </Modal>
      </div>
      <div>  
        <nav>
          <input className="menu-checkbox" type="checkbox" id="menu" />
          <label className="menu" htmlFor="menu">
            &#x2630;
          </label>
          <ul className="ul-menu">
            <Link to="/rol">
              <li className="li-menu">Rol</li>
            </Link>
            <Link to="/">
              <li className="li-menu">Exit</li>
            </Link>
          </ul>
        </nav>
      </div>
      <hr />
      <hr />
    </div>
  );
}
export default Header;
