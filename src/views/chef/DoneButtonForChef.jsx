import React, { useContext } from "react";
import SingleOrderContext from "./SingleOrderContext";
import { db } from "../../firebase.js";
import { ToastContainer, toast } from "react-toastify";

const DoneButtonForChef = () => {
  
  const [singleOrder, setSingleOrder] = useContext(SingleOrderContext);
  

  const orderStateAsPrepared = (orderIdentifier) => {

    console.log(singleOrder.data.order)

    let readyChefArray = singleOrder.data.order.map(item=>item.readyChef)
    let readyForDone = readyChefArray.every(check => check==true)

    if(readyForDone){
    
    
    db.collection("pedidos")
      .doc(orderIdentifier)
      .update({
        state: "prepared",
      })
      .then(() => {
        console.log("updated the state to prepared");
        
      });
    

      setSingleOrder()
    } else {
      alert('debes checkear todos los productos')
    }

    
  };

  return (
    

    
    
    <button
      className="doneButtonForChef"
      onClick={()=>{orderStateAsPrepared(singleOrder.orderId)}}>
      DONE
    </button>
    
    
  );
};

export default DoneButtonForChef;





