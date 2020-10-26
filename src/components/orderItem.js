import React, {useState} from "react";
import "../views/waiter/waiter.scss";
import trash from "../assets/basura.png";
import plus from "../assets/mas.png";
import minus from "../assets/menos.png"

function OrderItem(props) {
    const [counter, setCounter]=useState(1)
    const incrementar = () =>{
        setCounter(counter+1)
    }
    const disminuir = () =>{
        setCounter(counter-1)
    }
  return (
    <div className="Orderitem-box">
      <div className="cant">
        <p className="item-name">{counter}</p>
      </div>
      <div className="product">
        <p className="item-product">{props.product}</p>
      </div>
      <div className="price">
        <p className="item-price">{props.price}</p>
      </div>
      <div>
      <img  onClick={disminuir} className="icons" src={minus} alt="trash" />
          <img onClick={incrementar} className="icons" src={plus} alt="trash" />
          <img className="icons" src={trash} alt="trash" />
      </div>
    </div>
  );
}
export default OrderItem;