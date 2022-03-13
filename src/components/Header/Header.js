import React from 'react';
import { Link } from 'react-router-dom';
import CartBlock from '../CartBlock/CartBlock';
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header_store-title" >
          Game Store
        </Link>
      </div>
      <div className="wrapper_header_cart-btn-wrapper" >
      <CartBlock/>
      </div>
    </div>
  )
}


export default Header
