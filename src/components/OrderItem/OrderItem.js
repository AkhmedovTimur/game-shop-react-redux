import React from 'react';
import { useDispatch } from 'react-redux';
import GameCover from '../GameCover/GameCover';
import { MdDeleteForever } from 'react-icons/md'
import './orderItem.css';
import { deleteItemFromCart } from '../../redux/cart/reducer';

function OrderItem({ game }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }

  return (
    <div className="order-item">
      <div className="order-item_cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item_title">
        <span>
          {game.title}
        </span>
      </div>
      <div className="order-item_price">
        <span>
          {game.price} руб.
        </span>
        <MdDeleteForever 
        size={25}
        className="cart-item_delete-icon"
        onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default OrderItem;
