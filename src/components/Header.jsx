// src/Header.jsx

import React from 'react';
import cartImg from '../assets/cart.png'; // your cart image

function Header({ cartCount, onCheckoutClick, onGoToMenu }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">My Korean Restaurant</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li><button onClick={onGoToMenu} className="nav-button">Menu</button></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#login">Login</a></li>
            <li className="cart">
              <button
                onClick={onCheckoutClick}
                className="cart-button"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <img
                  src={cartImg}
                  alt="Cart"
                  className="cart-icon"
                  style={{ width: '30px', height: '30px' }}
                />
                <span className="cart-count">{cartCount}</span>
              </button>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
