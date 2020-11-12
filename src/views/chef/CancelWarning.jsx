import React, { Fragment, useContext } from "react";
import { db } from "../../firebase.js";
import SingleOrderContext from "./SingleOrderContext";
import "../modal/cancelModal.scss";

const CancelWarning = () => {
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

    setSingleOrder();
  };

  return (
    <Fragment>
      <div className="cancelWarning">
        Please confirm you want to cancel this order
      </div>
      <button
        className="confirm"
        onClick={() => {
          orderStateAsCanceled(singleOrder.orderId);
        }}
      >
        CONFIRM
      </button>
    </Fragment>
  );
};

export default CancelWarning;
