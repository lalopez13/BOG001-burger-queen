import React, { useContext, useState, useEffect } from "react";
import SingleOrderContext from "./SingleOrderContext";
import CheckboxesList from './CheckboxesList'


const SinglePendingOrderComponent = () => {

  const singleOrder = useContext(SingleOrderContext);
  
  
  
  
 return (
    <div className="rectangle">
      <div className="customerTitle"> CUSTOMER: </div>
      <div id="customerName"> {singleOrder.data.customer}</div>
      <div className="tableTitle"> TABLE:</div>
      <div id="tableNumber"> {singleOrder.data.table}</div>
      <div className="dateTime">Entry:</div>
      <div className="quantity">QUANT</div>
      <div className="product">PRODUCT</div>

              
      <CheckboxesList />
        
        
        
      
    </div>
  );
}


export default SinglePendingOrderComponent;
