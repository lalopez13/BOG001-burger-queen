import React from "react";

function ModalContent(props){

    return(
        <>
        <div className='modal-Title'>Options</div>
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
            <input type='checkbox' name='extra-cheese' value='cheese' className='cheese' onChange={props.AddExtra} />Cheese
            $1
        </div>
        </div>
          <button onClick={()=>{alert("add extras!!!")}}>Add item</button>
      </>
    )
}

export default ModalContent;