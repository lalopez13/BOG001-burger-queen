import React, { useState } from "react";
import Header from "../../components/header.jsx";
import Item from "../../components/item.jsx";
import Order from "../../components/order.jsx";
import Menu from "../../data/menu.json";
import Modal from "../modal/modal";
import ModalContent from "../modal/modalContent.jsx";
import {NotifyErrorMeat} from "../../components/notification.jsx";
import { ToastContainer } from "react-toastify";

function WaiterView() {
  const [menu, setMenu] = useState("Breakfast");
  const [order, setOrder] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemLunch, setItemLunch] = useState("");

  // Data from json file
  const data = Menu.Menu;

  // Unique id generator
  const letters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
  let idSuffixLunch = "";
  for (let i = 0; i < 4; i++) {
    idSuffixLunch += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  const addExtrasOrder = (e) => {
    let price = itemLunch.price;
    let product = itemLunch.product;
    let key = itemLunch.id + "-" + idSuffixLunch;
    let quantity = 1;
    let meatDefault = " meat";

    if (e.target.dataset.meat !== "") {
      product += ", " + e.target.dataset.meat;
    }
    if (!e.target.dataset.meat) {
      product += ", " + meatDefault;
    }
    if (e.target.dataset.egg === "egg") {
      product += ", egg";
      price++;
    }
    if (e.target.dataset.cheese === "cheese") {
      product += ", cheese";
      price++;
    }
    console.log(product);
    order.push({ key, product, price, quantity });
    setOpen(false);
  };

  const addItemOrder = (item) => {
    // //devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
    const singleItem = order.findIndex((i) => i.key === item.id);

    if (item.type === "Lunch") {
      setOpen(true);
      console.log("entro hamburguesa");
      setItemLunch(item);
    } else if (singleItem == -1) {
      const price = item.price;
      const product = item.product;
      const key = item.id;
      const quantity = 1;
      const readyChef = false;
      order.push({ key, product, price, quantity, readyChef });
      setOrder([...order]);
    } else {
      let doubleItem = order[singleItem];
      doubleItem = doubleItem.quantity += 1;
      setOrder([...order]);
    }
  };

  const clearOrder = () => {
    setOrder([]);
  };

  return (
    <div>
      <div className="header-waiter">
        <Header rol="Waiter#" number={3} />
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
            <ModalContent onClick={(e) => addExtrasOrder(e)} />
          </Modal>
          <ToastContainer />
        </div>
        <div className="menu-order">
          <Order order={order} reset={clearOrder} onClick={()=> {setOrder([]);NotifyErrorMeat()}} />
        </div>
      </div>
    </div>
  );
}

export default WaiterView;
