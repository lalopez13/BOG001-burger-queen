import React, { useState , Fragment} from "react";
import UseOrdersPending from "./UseOrdersPending";
import SinglePendingOrderComponent from "./SinglePendingOrderComponent";
import SingleOrderContext from "./SingleOrderContext.jsx";
import DefaultMessage from './DefaultMessage'


const PendingOrders = () => {
  const currentOrdersList = UseOrdersPending();
  const [singleOrderData, setSingleOrderData] = useState();

  return (
    
    <Fragment>
      <ul className="ulPending">
        {currentOrdersList.map((order) => (
          <li
            className="pendingItem"
            key={order.orderId}
            onClick={() => setSingleOrderData(order)}
          >
            <div> Customer: {order.data.customer} </div>
            <div> Table : {order.data.table} </div>
          </li>
        ))}
      </ul>

      
        <SingleOrderContext.Provider value={singleOrderData}>
          
          {singleOrderData === undefined ? <DefaultMessage /> : <Fragment><SinglePendingOrderComponent /> </Fragment>}
          
        </SingleOrderContext.Provider>
      
      </Fragment>
     
  );
};

export default PendingOrders;
