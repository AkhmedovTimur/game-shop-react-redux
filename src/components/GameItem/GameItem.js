import React from 'react';
import GameBuy from '../GameBuy/GameBuy';
import GameCover from '../GameCover/GameCover';
import GameGenre from '../GameGenre/GameGenre';
import './gameItem.css'

function GameItem({ game }) {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item_details">
        <span className="game-item_title">{game.title}</span>
        <div className="game-item_genre">
          {
            game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
          }
        </div>
        <div className="game-item_buy">
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
  )
}


export default GameItem
