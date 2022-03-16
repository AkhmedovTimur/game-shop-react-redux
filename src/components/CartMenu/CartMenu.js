import React from 'react';
import Button from '../Button/Button';
import { calculatePrice } from '../utils';
import './cartMenu.css';

function CartMenu({ items, onClick }) {

  return (
    <div className="cart-menu">
      <div className="cart-menu_games-list">
        { items.length > 0 ? items.map((game) => game.title) : "Корзина пуста" }
      </div>
      {
        items.length > 0 ? (
          <div className="cart-menu_arange">
            <div className="cart-menu_total_price">
              <span>Итого:</span>
              <span>{calculatePrice(items)}руб.</span>
            </div>
            <Button type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </Button>
          </div>
         ) : null
      }
    </div>
  );
};

export default CartMenu;
