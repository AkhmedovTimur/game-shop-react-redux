import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './cartBlock.css';

function CartBlock() {
  return (
    <div className="cart-block">
      < AiOutlineShoppingCart size={25} className="cart-block_icon" />
      <span className="cart-block_total-price">2313 руб.</span>
    </div>
  )
}

export default CartBlock;
