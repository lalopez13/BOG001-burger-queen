import React, { useState, Fragment } from "react";
import UseOrdersDone from "./UseOrdersDone";

import '../modal/preparedModal.scss'
import { db } from "../../firebase.js";

const PreparedOrdersList = () => {
  const currentPreparedOrdersList = UseOrdersDone();

  const orderStateAsDelivered = (orderIdentifier) => {
    db.collection("pedidos")
      .doc(orderIdentifier)
      .update({
        state: "delivered",
        delivery_time : new Date().toLocaleString("es-CO")
      })
      .then(() => {
        console.log("updated the state to delivered");
        
      });
    
      
    
  };



  
  return (
    <Fragment>
      <ul className="ulPrepared">
        {currentPreparedOrdersList.map((order) => (
          <li
            className="preparedItems"
            key={order.orderId}   
          >
            <div> Customer: {order.data.customer}, Table : {order.data.table} </div>
            
            <button onClick = {()=>{orderStateAsDelivered(order.orderId)}}   >Delivered</button>
          </li>
        ))}
      </ul>

    </Fragment>
  );
};

export default PreparedOrdersList;