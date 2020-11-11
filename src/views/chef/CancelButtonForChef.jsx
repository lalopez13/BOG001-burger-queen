import React, { Fragment, useContext } from "react";
import SingleOrderContext from "./SingleOrderContext";
import { db } from "../../firebase.js";



const CancelButtonForChef = () => {
  
  const [singleOrder, setSingleOrder] = useContext(SingleOrderContext);
  

  const orderStateAsCanceled = (orderIdentifier) => {
    
    

        
    db.collection("pedidos")
      .doc(orderIdentifier)
      .update({
        state: "canceled",
      })
      .then(() => {
        console.log("updated the state to canceled");
        
      });
    

      setSingleOrder()


    
    
  };

  return (
    

    
    <Fragment>
    <button
      className="cancelButtonForChef"
      onClick={()=>{orderStateAsCanceled(singleOrder.orderId)}}
      
    >CANCEL</button>

    </Fragment>
    
    
  );
};

export default CancelButtonForChef;