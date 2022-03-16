import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import CartMenu from '../CartMenu/CartMenu';
import ItemsInCart from '../ItemsInCart/ItemsInCart';
import { calculatePrice } from '../utils';
import './cartBlock.css';

function CartBlock() {
  const [isCartMenuVisible, setisCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calculatePrice(items)

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      < AiOutlineShoppingCart size={25} className="cart-block_icon" onClick={() => setisCartMenuVisible(!isCartMenuVisible)} />
      {totalPrice > 0 ? <span className="cart-block_total-price">{totalPrice}Руб.</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  )
}

export default CartBlock;
