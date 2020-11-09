import React, { useState , Fragment } from "react";
import UseOrdersDone from "./UseOrdersDone";
import DefaultDoneMessage from './DefaultDoneMessage';
import SingleDoneOrderContext from './SingleDoneOrderContext';
import SingleDoneOrderComponent from './SingleDoneOrderComponent'


const DoneOrders = () => {
  const currentOrdersList = UseOrdersDone();
  const [singleDoneOrderData, setSingleDoneOrderData] = useState();

  return (

    <Fragment>

    <ul className="ulDone">
      {currentOrdersList.map((order) => (
        <li 
        className="doneItem" 
        key={order.orderId}
        onClick={() => setSingleDoneOrderData(order)}>
          <div> Customer: {order.data.customer} </div>{" "}
          <div> Table : {order.data.table} </div>
        </li>
      ))}
    </ul>

    <SingleDoneOrderContext.Provider value={singleDoneOrderData}>
              
    {singleDoneOrderData === undefined ? <DefaultDoneMessage /> : <Fragment><SingleDoneOrderComponent /> </Fragment>}

    </SingleDoneOrderContext.Provider>

    </Fragment>





  );
};

export default DoneOrders;
