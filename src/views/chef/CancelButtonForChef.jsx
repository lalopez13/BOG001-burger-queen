import React, { useContext } from "react";
import SingleOrderContext from "./SingleOrderContext";
import { db } from "../../firebase.js";
import { ToastContainer, toast } from "react-toastify";

const CancelButtonForChef = () => {
  
  const [singleOrder, setSingleOrder] = useContext(SingleOrderContext);
  

  const orderStateAsCanceled = (orderIdentifier) => {

    alert('¿Está seguro que desea cancelar la orden?')

        
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
    

    
    
    <button
      className="cancelButtonForChef"
      onClick={()=>{orderStateAsCanceled(singleOrder.orderId)}}
      
    >CANCEL</button>
    
    
  );
};

export default CancelButtonForChef;