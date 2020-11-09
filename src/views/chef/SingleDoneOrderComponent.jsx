import React, { useContext } from "react";
import SingleDoneOrderContext from "./SingleDoneOrderContext";
import CheckboxesDoneList from './CheckboxesDoneList'



const SingleDoneOrderComponent = () => {

  const singleDoneOrder = useContext(SingleDoneOrderContext);
  
  
  
  
 return (
    <div className="rectangle">
      <div className="customerTitle"> CUSTOMER: </div>
      <div id="customerName"> {singleDoneOrder.data.customer}</div>
      <div className="tableTitle"> TABLE:</div>
      <div id="tableNumber"> {singleDoneOrder.data.table}</div>
      <div className='entry'>Entry:</div>
      <div className='entryDateHour'>{singleDoneOrder.data.init_time} </div>
      <div className="quantity">QUANT</div>
      <div className="product">PRODUCT</div>

      <CheckboxesDoneList />

              
      
        
        
        
      
    </div>
  );
}


export default SingleDoneOrderComponent;
