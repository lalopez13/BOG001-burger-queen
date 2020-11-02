import React, { useState } from "react";
import Header from "../../components/header.js";
import Item from "../../components/item.js";
import Order from "../../components/order.js";
import Menu from "../../data/menu.json";
import Modal from "../modal/modal";
import ModalContent from "../modal/modalContent.js";
import NotifyError from "../../components/notification";
import { ToastContainer } from "react-toastify";

function WaiterView() {
  const [menu, setMenu] = useState("Breakfast");
  const [order, setOrder] = useState([]);
  const [open, setOpen] = useState(false);
  const [optionMeat, setOptionMeat] = useState("");
  const [extras, setExtras] = useState("");
  const data = Menu.Menu;
  console.log(optionMeat,extras);

  const cancelOrder = ()=>{
    setOrder([]);
  }
const addExtrasOrder=(e)=>{
 alert("send")
}
  // const printMenu = (item,index, func) => {
  //   return (
  //     <Item
  //       onClick={() => {
  //         func(item);
  //       }}
  //       key={index}
  //       product={item.product}
  //       price={item.price}
  //     />
  //   );
  // };

  // cons modalHamburgerOptions =()=>{
    
  // }

  const addItemOrder = (item) => {
    // let productsOrder=[]
    if (item.type === "Lunch") {
      setOpen(true);
      console.log(item.kind);
      const price = item.price;
      const product = item.product ;
      const key = item.id;
      const quantity = 1;
      console.log("mesa");
      order.push({ key, product, price, quantity });
    } else {
      const price = item.price;
      const product = item.product;
      const key = item.id;
      const quantity = 1;
      // productsOrder.push({key, product, price, quantity})
      order.push({ key, product, price, quantity });
    }

    // console.log(productsOrder)
    setOrder([...order]);
  };


  return (
    <div>
      <div className="header-waiter">
        <Header rol="Waiter#" number={2} />
        <hr />
        <hr />
      </div>
      <div className="menu-container">
        <div className="menu-option">
          <nav className="menu-nav">
            <ol>
              <li className="title-nav" onClick={() => setMenu("Breakfast")}>
                BREAKFAST
              </li>
              <li className="title-nav" onClick={() => setMenu("Lunch")}>
                LUNCH
              </li>
              <li className="title-nav" onClick={() => setMenu("Drinks")}>
                DRINKS
              </li>
            </ol>
          </nav>
          <div className="data-button-product">
            {data
              .filter((sort) => sort.type.includes(menu))
              .map((item, index) => (
                <Item
                  onClick={() => {
                    addItemOrder(item);
                  }}
                  key={index}
                  product={item.product}
                  price={item.price}
                />
              ))}
            ;
          </div>
          <Modal open={open} close={() => setOpen(false)}>
            <ModalContent
           onChange={(e) => setOptionMeat(e.target.value)}
           AddExtra={(e) => setExtras(e.target.value)}
           onClick={addExtrasOrder}
            />
          </Modal>
        </div>
        <div className="menu-order">
          <Order
            order={order}
            onClick={()=> cancelOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default WaiterView;
