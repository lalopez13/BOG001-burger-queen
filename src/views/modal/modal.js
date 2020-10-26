import React from "react";
import "./modal.scss"

function Modal (){
return(
    <div className="modal-wrapper">
        <div className="modal-header">
<span className="modal-close">x</span>
        </div>
        <div className="modal-content">
            <div className="modal-body">
            <div className="burguer-opt"></div>
<h1>Hamburguer types</h1>
<div>
<input type="radio" name="h-type" id="c01" value="meat" checked/>meat
<input type="radio" name="h-type" id="c02" value="chicken" />chicken
</div>
            </div>
            <div className="modal-footer">
                <button>Close</button>
            </div>
        </div>
    </div>
)
}

export default Modal