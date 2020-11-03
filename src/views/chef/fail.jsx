const singleOrder = useContext(SingleOrderContext); 
    
    const [boxes, setBoxes] = useState(
        [{
            id:123,
            checked : false
        },
    {
        id : 589,
        checked : false

    }]);
    
    
    const setIndividualBox = (idProduct, booleanValue) => {

    let newCheckboxes = [...allCheckBoxes];
    
    newCheckboxes =  newCheckboxes.map(object => {
      if(object.idProduct === idProduct){ 
        object.checkValue = booleanValue;
        return object
        
      } else {
        return object}
    });

    return({boxes.map((obj) => {  
          
          
          
   
              <label>
                <input
                  type="checkbox"
                  checked = {obj.checked}
                  key = { obj.identifier}
                  onChange={(e) => {setIndividualCheckBox(obj.idProduct, e.target.checked)}}
                />{obj.identifier}
                {console.log('esta ya es la parte de los checkbox')}
                {console.log(allCheckBoxes)}
        
        
               
            </label>
            }
            )})

    // const initialAllCheckBoxes = Object.keys(singleOrder.data).filter((key) => key.includes("item")).map((productItem, i) => 
    //     ({
    //         identifier: singleOrder.orderId + singleOrder.data[productItem].idProduct,
    //         idProduct : singleOrder.data[productItem].idProduct,
    //         idOrder : singleOrder.orderId,
    //         numberItem: productItem,
    //         checkValue : false
    //     }))

    //      const [allCheckBoxes, setAllCheckBoxes ] = useState(initialAllCheckBoxes);
 

//   const setIndividualCheckBox = (idProduct, booleanValue) => {

//     let newCheckboxes = [...allCheckBoxes];
    
//     newCheckboxes =  newCheckboxes.map(object => {
//       if(object.idProduct === idProduct){ 
//         object.checkValue = booleanValue;
//         return object
        
//       } else {
//         return object}
//     });
    
//     setAllCheckBoxes(newCheckboxes);
//     console.log(idProduct)
//     console.log(booleanValue)
//     console.log(allCheckBoxes)
//     console.log(newCheckboxes)

//   }



//   return({allCheckBoxes.map((obj) => {  
          
          
          
   
//       <label>
//         <input
//           type="checkbox"
//           checked = {obj.checked}
//           key = { obj.identifier}
//           onChange={(e) => {setIndividualCheckBox(obj.idProduct, e.target.checked)}}
//         />{obj.identifier}
//         {console.log('esta ya es la parte de los checkbox')}
//         {console.log(allCheckBoxes)}


       
//     </label>
//     }
//     )})