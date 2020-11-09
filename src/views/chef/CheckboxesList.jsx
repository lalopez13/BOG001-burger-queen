import React, { useContext, useState, useEffect, Fragment } from "react";
import SingleOrderContext from "./SingleOrderContext";
import { db } from "../../firebase.js";





const CheckboxesList = () => {
  

  const [singleOrder, setSingleOrder] = useContext(SingleOrderContext);
  const [box, setBox] = useState(false);
  const [productItem, setProductItem] = useState();
  const [orderIdentifier, setOrderIdentifier] = useState();

  console.log(singleOrder.data.order)
  
  

  
  useEffect(() => {
        
    if(productItem !== undefined && box !== undefined && orderIdentifier===singleOrder.orderId){
    singleOrder.data.order[productItem].readyChef = box;
    let updatedData = singleOrder.data;



    db.collection("pedidos")
      .doc(orderIdentifier)
      .set(updatedData)
      .then(() => {
        console.log("updated");
      });
    } 
  });



  const getCurrentData = (booleanToBox, productItemValue, orderIdValue) => {

    console.log(productItemValue)
    console.log(booleanToBox)
    setBox(booleanToBox);
    setProductItem(productItemValue);
    setOrderIdentifier(orderIdValue);
    
  };

 
  return (

    <Fragment>

      <ul className = 'checkBoxList'>

        {
          singleOrder.data.order.map((product)=>{
            return(<li
                className = 'checkboxItem'
                key= {singleOrder.orderId + 'productLi' + product.key}>
                <label className = 'labelCheckbox'>
                      <input
                        type="checkbox"
                        className = 'checkboxFigure'
                        checked = {product.readyChef}
                        key= {singleOrder.orderId + 'productInput' +product.key}
                        onChange={(e) => {getCurrentData(e.target.checked, singleOrder.data.order.indexOf(product), singleOrder.orderId)}}
                      />
                      {/* <span className = 'customCheckbox' ></span> */}
                      
                  <div className = 'productQuantity' >{product.quantity}</div>    
                  <div className = 'productName' >{product.product}</div>
                </label>
                
                </li>

            )
          })
        }

      </ul>
    </Fragment>
    

    
      // <Fragment>

      //   <ul className = 'checkBoxList'>
      //   {Object.keys(singleOrder.data)
      // .filter((key) => key.includes('item'))
      // .map((item) =>{
      //   return(

          
      //   <li
      //   className = 'checkboxItem'
      //   key= {singleOrder.orderId + item}>
      //   <label className = 'labelCheckbox'>
      //         <input
      //           type="checkbox"
      //           className = 'checkboxFigure'
      //           checked = {singleOrder.data[item].readyChef}
      //           key= {singleOrder.orderId + item + singleOrder.data[item].id}
      //           onChange={(e) => {getCurrentData(e.target.checked, item, singleOrder.orderId)}}
      //         />
      //         <span className = 'customCheckbox' ></span>
              
      //     <div className = 'productQuantity' >{singleOrder.data[item].quantity}</div>    
      //     <div className = 'productName' >{singleOrder.data[item].product}</div>
      //   </label>
        
      //   </li>
        
      //   )})}




      //   </ul>
      // </Fragment>
    
  
   
    

    
    )
};

export default CheckboxesList;




  