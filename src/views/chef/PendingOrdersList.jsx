import React, { useState, Fragment } from "react";
import UseOrdersPending from "./UseOrdersPending";
import SinglePendingOrderComponent from "./SinglePendingOrderComponent";
import SingleOrderContext from "./SingleOrderContext.jsx";
import DefaultMessage from "./DefaultMessage";

const PendingOrders = () => {
  const currentOrdersList = UseOrdersPending();
  const [singleOrderData, setSingleOrderData] = useState();
  const [selectedOrder, setSelectedOrder] = useState();

  const currentActiveOrder = (orderData) => {
    setSingleOrderData(orderData);
    setSelectedOrder(orderData.orderId);
  };

  return (
    <Fragment>
      <ul className="ulPending">
        {currentOrdersList.map((order) => (
          <li
            className="pendingItem"
            key={order.orderId}
            style={
              order.orderId === selectedOrder
                ? { backgroundColor: "#5D9B84" }
                : { backgroundColor: "#FFD195" }
            }
            onClick={() => currentActiveOrder(order)}
          >
            <div> Customer: {order.data.customer} </div>
            <div> Table : {order.data.table} </div>
          </li>
        ))}
      </ul>

      <SingleOrderContext.Provider
        value={[singleOrderData, setSingleOrderData]}
      >
        {singleOrderData === undefined ? (
          <DefaultMessage />
        ) : (
          <Fragment>
            <SinglePendingOrderComponent />{" "}
          </Fragment>
        )}
      </SingleOrderContext.Provider>
    </Fragment>
  );
};

export default PendingOrders;
