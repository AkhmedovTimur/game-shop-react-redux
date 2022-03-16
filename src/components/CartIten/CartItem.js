import React from 'react';
import './cartItem.css'

function CartItem({ title, price, id }) {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item_price"></div>
      <span>{price}руб.</span>

    </div>


  )
}


export default CartItem
