import React, { useRef } from 'react';

import logo from '../images/logo-bookmark.svg';
import './nav.css';

const Navigation = () => {
  const menuContainer = useRef();

  const showMenu = (e) => {
    console.log(menuContainer.current.classList.toggle('active'));
  };

  return (
    <header className='container'>
      <nav className='navbar'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>

        <div className='menu' ref={menuContainer}>
          <ul>
            <li className='menu-items'>Features</li>
            <li className='menu-items'>Pricing</li>
            <li className='menu-items'>Contact</li>
            <li className='menu-items' id='btn-login'>
              Login
            </li>
          </ul>
        </div>

        <div className='hamburger' onClick={(e) => showMenu(e)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
