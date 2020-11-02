import React, { useState, Fragment } from "react";
import Button from "../components/primaryButton.js";
import OrderItem from "../components/orderItem.js";
import {NotifyErrorInput} from "../components/notification.js";
import { ToastContainer } from "react-toastify";
import Input from "../components/inputs.js";

function Order(props) {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  // lo intente incializando el estado pero no me sirvio por eso solo lo dejo con el setState
  const [, setActualOrder] = useState(props.order);
  console.log(customerName);
  // array de la orden que se trae desde la vista del mesero
  const resumen = props.order;
  console.log(resumen.id);

  const addItemQuantity = (item) => {
    // si la encuentra buscar en el array el item actual para actualizar la propiedad de cantidad
    // del item en el array del resumen de la orden
    // const currentItem = resumen.find((element) => element.key === item.key);
    // currentItem.quantity = currentItem.quantity + 1;
    item.quantity = item.quantity + 1
    setActualOrder({ ...resumen });
  };

  const removeItemQuantity = (item) => {
    // const currentItem = resumen.find((element) => element.key === item.key);
    // eliminar el producto si la cant prod. es menor a 1
    if (item.quantity <= 1) {
      resumen.splice(resumen.indexOf(item), 1);
      setActualOrder([...resumen]);
    } else {
      item.quantity = item.quantity - 1;
      setActualOrder({ ...resumen });
    }
  };

  const deleteItem = (item) => {
    // const currentItem = resumen.find((element) => element.key === item.key);
    resumen.splice(resumen.indexOf(item), 1);
    setActualOrder([...resumen]);
  };


  const sendOrder =(e)=>{
    e.preventDefault();
    if(!customerName || !tableNumber){
      NotifyErrorInput()
    }
    else if(resumen.length === 0){
      alert("no se puede enviar una orden vacia")
    }
    else{
     alert('continue')
      //
  // Crear el objeto para subir a firebase
  // const OrderUser =() =>{
  //   name: customerName,
  //   table: tableNumber,
  //   Date:new Date().toLocaleString("es-CO"),
  //   order:props.order,
//     Status : 'pending'
  //   Total:
  // }
    }
  }
  
 

  console.log(resumen);
  return (
    <Fragment>
      <h2 className="title-menu">ORDER</h2>
      <div className="menu-inputs">
        <Input
          label="CUSTOMER:"
          className="customer"
          handleChange={(e) => setCustomerName(e.target.value)}
        />
        <Input
          label="TABLE:"
          className="table"
          handleChange={(e) => setTableNumber(e.target.value)}
        />
      </div>
      <div className="menu-order-title">
        <h3>Cant </h3>
        <h3>product</h3>
        <h3>price</h3>
      </div>
      <div className="tab-order">
        {resumen.map((item, index) => {
          return (
            <OrderItem
              key={index}
              quantity={item.quantity}
              product={item.product}
              newPrice={item.quantity * item.price}
              addItem={(e) => addItemQuantity(item)}
              restItem={(e) => removeItemQuantity(item)}
              deleteItem={(e) => deleteItem(item)}
            />
          );
        })}
      </div>
      <div className="menu-total-order">
        <h3>
          TOTAL:$
          <span>
            {resumen.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </span>
        </h3>
      </div>
      <div className="menu-order-btns">
        <Button onClick={props.onClick} class="cancel-btn" label="CANCEL" />
        <Button class="send-btn" label="SEND" onClick={sendOrder} />
        <ToastContainer />
      </div>
    </Fragment>
  );
}
export default Order;
