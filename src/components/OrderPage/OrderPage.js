import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../OrderItem/OrderItem';
import { calculatePrice } from '../utils';

import './orderPage.css';

function OrderPage() {
const items = useSelector(state => state.cart.itemsInCart)

if(items.length < 1){
  return <h1>Ваша корзина пуста</h1>
}

  return (
    <div className="order-page">
     <div className="order-page_left">
       {items.map(game => <OrderItem game={game}/>)}
     </div>
     <div className="order-page_right"> 
     <div className="order-page_total-price">
       <span>
       {items.length} товаров на сумму {calculatePrice(items)} руб.
       </span>
     </div>
     </div>
    </div>
  ) 
}

export default OrderPage;
