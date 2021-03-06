import React from "react";
import PendingOrders from "./PendingOrdersList.jsx";
import DoneOrders from "./DoneOrdersList";
import HeaderChef from "../../components/HeaderChef";
import "./chefViewStyles.scss";

const ChefView = () => {
  const [component, setComponent] = React.useState("pending");

  const renderPendingView = () => {
    setComponent("pending");
    document.getElementById("pendingOption").style.color = " #5D9B84";
    document.getElementById("doneOption").style.color = null;
  };

  const renderDoneView = () => {
    setComponent("done");
    document.getElementById("pendingOption").style.color = "#D4804C";
    document.getElementById("doneOption").style.color = "#5D9B84";
  };

  return (
    <div id="chefViewContainer">
      <HeaderChef rol="chef" />
      <div id="pendingOption" onClick={() => renderPendingView()}>
        PENDING
      </div>
      <div id="line"></div>
      <div id="doneOption" onClick={() => renderDoneView()}>
        DONE
      </div>
      {component === "pending" ? <PendingOrders /> : <DoneOrders />}
    </div>
  );
};

export default ChefView;
