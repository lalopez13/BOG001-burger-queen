import React, { useState } from "react";
import Header from "../../components/header.js";
import Item from "../../components/item.js";
import Order from "../../components/order.js";
import Menu from "../../data/menu.json";

import "./waiter.scss";



function WaiterView() {

   const [menu, setMenu] = useState("Breakfast");
   const [customerName, setCustomerName] = useState("");
   const [tableNumber, setTableNumber] = useState("");
   const [order, setOrder] = useState([]);
   console.log(customerName,tableNumber)
// const TitleNav=()=>{ 
//     const liElement = document.querySelectorAll(".title-nav");
//     liElement.style.color="#D4804C";
// }


  const data = Menu.Menu;
  //console.log(menu);

  const addItemOrder = (item) => {
    // let productsOrder=[]
     
    const price = item.price;
    const product = item.product;
    const key = item.id;
    const quantity = 1
    // productsOrder.push({key, product, price, quantity})
    order.push({key, product, price, quantity})
    // console.log(productsOrder)
    setOrder([...order])
  };

  //   useEffect(()=>{
  //       fetchItems();
  //   }, []);
  //  const [items, setItems]= useState([]);
  //  const fetchItems = ()=>{
  //      const data = fetch('../data/menu.json')
  //      const items = data.json
  //  }
  return (
    <div>
      <Header rol="Waiter#" number={2} />
      <hr />
      <hr />
      <div className="menu-container">
        <div className="menu-option">
          <nav className="menu-nav">
            <ol>
              <li className="title-nav" onClick={() => setMenu("Breakfast")}>BREAKFAST</li>
              <li className="title-nav" onClick={() => setMenu("Lunch")}>LUNCH</li>
              <li className="title-nav" onClick={() => setMenu("Drinks")}>DRINKS</li>
            </ol>
          </nav>
          <div className="data-button-product">
            {data
              .filter((sort) => sort.type.includes(menu))
              .map((item, index) => (

                   <Item
                 onClick={(() => {addItemOrder(item)})} 
                  key={index}
                  product={item.product}
                  price={item.price}
                />         
              ))}
            ;
          </div>
        </div>
        <div className="menu-order">
        <h1 className="title-menu">ORDER</h1>
        <div className="menu-inputs">
          <label>
            CUSTOMER:
            <input
              className="customer"
              type="text"
              name="name"
              required
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </label>
          <label>
            TABLE:
            <input
              className="table"
              type="text"
              name="table"
              required
              onChange={(e) => setTableNumber(e.target.value)}
            />
          </label>
        </div>
        <div className="menu-order-title">
          <h3>Cant </h3>
          <h3>product</h3>
          <h3>price</h3>
        </div>
          <Order order={order} onClick={(() => {setOrder([])})} />
        </div>
      </div>
    </div>
  );
}

export default WaiterView;
