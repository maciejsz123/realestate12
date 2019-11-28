import React from 'react';

function HouseItem(props) {
  return(
    <div>
      <p>city: {props.city} price: {props.price} zł</p>
    </div>
  )
}

export default HouseItem;
