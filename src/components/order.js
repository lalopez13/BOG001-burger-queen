import React, {useState,Fragment}from "react";
import Button from "../components/primaryButton.js";
import OrderItem from "../components/orderItem.js";
import Notify from "../components/notification.js"
import { ToastContainer} from 'react-toastify';
import Input from "../components/inputs.js";




function Order (props){
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  console.log(customerName, tableNumber);
    return(
        <Fragment>        
        <h2 className="title-menu">ORDER</h2>
        <div className="menu-inputs">
        <Input label="CUSTOMER:" className="customer" handleChange={(e) => setCustomerName(e.target.value)} />
        <Input label="TABLE:" className="table" handleChange={(e) => setTableNumber(e.target.value)} />
        </div>
        <div className="menu-order-title">
          <h3>Cant </h3>
          <h3>product</h3>
          <h3>price</h3>
        </div>
        <div className="tab-order">
        {props.order.map((item, index)=> {
       return(
          <OrderItem key={index} product={item.product} price={item.price}/>  
       )
        }
        )} 
        </div>
        <div className="menu-total-order">
          <h3 onClick={Notify}>TOTAL</h3>
          <p>$</p>
          <ToastContainer />
        </div>
        <div className="menu-order-btns">
        <Button onClick={props.onClick} class="cancel-btn" label="CANCEL" />
        <Button class="send-btn" label="SEND" /> 
        </div>
      </Fragment>

    )

}
export default Order;