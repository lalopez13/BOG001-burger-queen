import React from 'react';

function NavigationMenu(props){
return(
    <nav className="menu-nav">
    <ol>
      <li className="title-nav" onClick={props.onBreakfast}>
        BREAKFAST
      </li>
      <li className="title-nav" onClick={props.onLunch}>
        LUNCH
      </li>
      <li className="title-nav" onClick={props.onDrinks}>
        DRINKS
      </li>
    </ol>
  </nav>
)
}

export default NavigationMenu;