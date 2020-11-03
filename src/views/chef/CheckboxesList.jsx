import React, { useContext, useState, useEffect, Fragment } from "react";
import SingleOrderContext from "./SingleOrderContext";
import { db } from "../../firebase.js";

const Checkboxes = () => {
  //variables checked, box y orderId

  const singleOrder = useContext(SingleOrderContext);
  const [box, setBox] = useState(false);
  const [productItem, setProductItem] = useState();
  const [orderIdentifier, setOrderIdentifier] = useState();
  
  

  
  useEffect(() => {
        
    if(productItem !== undefined && box !== undefined && orderIdentifier===singleOrder.orderId){
    singleOrder.data[productItem].readyChef = box;
    let updatedData = singleOrder.data;

    db.collection("odersprueba")
      .doc(orderIdentifier)
      .set(updatedData)
      .then(() => {
        console.log("updated");
      });
    } 
  });



  const getCurrentData = (booleanToBox, productItemValue, orderIdValue) => {
    setBox(booleanToBox);
    setProductItem(productItemValue);
    setOrderIdentifier(orderIdValue);
    
  };

 
  return (
    

    
      <Fragment>

        <ul className = 'checkBoxList'>
        {Object.keys(singleOrder.data)
      .filter((key) => key.includes('item'))
      .map((item) =>{
        return(

          
        <li
        className = 'checkboxItem'
        key= {singleOrder.orderId + item}>
        <label className = 'labelCheckbox'>
              <input
                type="checkbox"
                className = 'checkboxFigure'
                checked = {singleOrder.data[item].readyChef}
                key= {singleOrder.orderId + item + singleOrder.data[item].id}
                onChange={(e) => {getCurrentData(e.target.checked, item, singleOrder.orderId)}}
              />
              
          <div className = 'productQuantity' >{singleOrder.data[item].quantity}</div>    
          <div className = 'productName' >{singleOrder.data[item].product}</div>
        </label>
        <button
        className = 'modalButton'
        key= { 'modalButton'+ singleOrder.orderId + item}>+</button>
        </li>
        
        )})}




        </ul>
      </Fragment>
    
  
   
    

    
    )
};

export default Checkboxes;




  