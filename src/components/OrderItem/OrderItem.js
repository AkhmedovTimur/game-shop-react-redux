import React from 'react';
import { useDispatch } from 'react-redux';
import GameCover from '../GameCover/GameCover';
import './orderItem.css';

function OrderItem({ game }) {
  // const dispatch = useDispatch()
  // const handleClick = 

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
      </div>
    </div>
  )
}

export default OrderItem;
