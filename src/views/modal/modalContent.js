import React, {useState} from "react";
import NotifyError from "../../components/notification.js"
import { ToastContainer} from 'react-toastify';

function ModalContent(props){

//   const [optionMeat, setOptionMeat] = useState();
//   const [egg, setEgg] = useState(false);
//   const [cheese, setCheese] = useState(false);
//   // const [showError, setError] = useState();

// console.log(egg,cheese,optionMeat)

    return(
        <>
        <div className='modal-Title'>Options</div>
        <form className="modal-form">
        <div className='option'>
          <input type='radio' name='options' value='meat' className='meat' onChange={props.onChange} /> Meat
            <input type='radio' name='options' value='chicken' className='chicken'  onChange={props.onChange}/> Chicken
            <input type='radio' name='options' value='veggie' className='veggie' onChange={props.onChange}/> Veggie
          </div>
        <div className='extras'>
          <div className='option-two'>
            <input type='checkbox' name='extra-egg' value='egg' className='egg' onChange={props.AddExtra}  />Egg
            $1
        </div>
          <div className='option-tree'>
            <input type='checkbox' name='extra-cheese' value='cheese' className='cheese' onChange={props.AddExtra}  />Cheese
            $1
        </div>
        </div>
          <button onClick={props.addExtrasOrder}>Add item</button>
          </form>
      </>
    )
}

export default ModalContent;