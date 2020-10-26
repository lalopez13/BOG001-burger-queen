import React, {useState,Fragment}from "react";
import Button from "../components/primaryButton.js";
import OrderItem from "../components/orderItem.js";



function Order (props){

    return(
        <Fragment>
        <div className="tab-order">
        {props.order.map((item, index)=> {
       return(
          <OrderItem key={index} product={item.product} price={item.price}/>  
       )
        }
        )} 
        </div>
        <div>
          <h3>Total</h3>
        </div>
        <div className="menu-order-btns">
        <Button onClick={props.onClick} class="cancel-btn" label="CANCEL" />
        <Button class="send-btn" label="SEND" /> 
        </div>
      </Fragment>

    )

}
export default Order;