import React from 'react';
import './gameBuy.css'

function GameBuy({ game }) {
  return (
    <div className="game-buy">
      <span className="game-buy_price">{game.price} руб.</span>
      
    </div>


  )
}


export default GameBuy
