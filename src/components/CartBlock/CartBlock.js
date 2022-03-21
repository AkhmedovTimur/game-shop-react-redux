import React, { useState , useCallback} from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartMenu from '../CartMenu/CartMenu';
import ItemsInCart from '../ItemsInCart/ItemsInCart';
import { calculatePrice } from '../utils';
import './cartBlock.css';

function CartBlock() {
  const [isCartMenuVisible, setisCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calculatePrice(items)
  const navigate = useNavigate()


  const handleClick = useCallback(()=> {
    setisCartMenuVisible(false);
    navigate('/order');
  },[navigate] )

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      < AiOutlineShoppingCart size={25} className="cart-block_icon" onClick={() => setisCartMenuVisible(!isCartMenuVisible)} />
      {totalPrice > 0 ? <span className="cart-block_total-price">{totalPrice}Руб.</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  )
}

export default CartBlock;
