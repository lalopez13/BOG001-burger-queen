import React, { useContext } from "react";
import SingleOrderContext from "./SingleOrderContext";
import CheckboxesList from './CheckboxesList'
import DoneButtonForChef from './DoneButtonForChef';
import CancelButtonForChef from './CancelButtonForChef';
import { useEffect } from "react";




const SinglePendingOrderComponent = () => {

  const [singleOrder, setSingleOrder] = useContext(SingleOrderContext);
  
  console.log(singleOrder.data)
  
  
 return (
    <div className="rectangle">
      <div className="customerTitle"> CUSTOMER: </div>
      <div id="customerName"> {singleOrder.data.customer}</div>
      <div className="tableTitle"> TABLE:</div>
      <div id="tableNumber"> {singleOrder.data.table}</div>
      <div className="entry">Entry:</div>
      <div className='entryDateHour'>{singleOrder.data.init_time} </div>
      <div className="quantity">QUANT</div>
      <div className="product">PRODUCT</div>
      

              
      <CheckboxesList />

      <CancelButtonForChef />
      <DoneButtonForChef />
      

      

        
        
        
      
    </div>
  );
}


export default SinglePendingOrderComponent;
