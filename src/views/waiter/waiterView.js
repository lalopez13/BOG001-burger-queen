import React from "react";


function waiterView() {

  return (
    <div>
      <div className="menu-option">
        <nav>
          <ol>
            <li>BREAKFAST</li>
            <li>LUNCH</li>
            <li>DRINKS</li>
          </ol>
        </nav>
      </div>

      <div className="menu-order">
        <h1>ORDER</h1>
      </div>

      <h1>This is the waiter view</h1>
    </div>
  );
}

export default waiterView;