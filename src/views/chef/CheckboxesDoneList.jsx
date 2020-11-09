import React, { useContext, Fragment } from "react";
import SingleDoneOrderContext from "./SingleDoneOrderContext";


const CheckboxesDoneList = () => {  

  const singleDoneOrder = useContext(SingleDoneOrderContext);
   
  return (
    

    
      <Fragment>

        <ul className = 'checkBoxList'>
        {Object.keys(singleDoneOrder.data)
      .filter((key) => key.includes('item'))
      .map((item) =>{
        return(

          
        <li
        className = 'checkboxItem'
        key= {singleDoneOrder.orderId + item}>
        <label className = 'labelCheckbox'>
              <input
                type="checkbox"
                className = 'checkboxFigure'                
                key= {singleDoneOrder.orderId + item + singleDoneOrder.data[item].id}                
              />
              <span className = 'customCheckbox' ></span>
              
          <div className = 'productQuantity' >{singleDoneOrder.data[item].quantity}</div>    
          <div className = 'productName' >{singleDoneOrder.data[item].product}</div>
        </label>
        <button
        className = 'modalButton'
        key= { 'modalButton'+ singleDoneOrder.orderId + item}>+</button>
        </li>
        
        )})}




        </ul>
      </Fragment>
    
  
   
    

    
    )
};

export default CheckboxesDoneList;




  