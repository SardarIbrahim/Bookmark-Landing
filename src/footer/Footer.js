import React from 'react';

import logo from '../images/logo-bookmark.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import './footer.css';

const Footer = () => {
  return (
    <section className='footer-section'>
      <footer className='footer container'>
        <div className='footer-left'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='footer-right'>
          <div>
            <img src={facebook} alt='' />
          </div>
          <div>
            <img src={twitter} alt='' />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
