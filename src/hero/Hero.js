import React from 'react';

import hero from '../images/illustration-hero.svg';
import './hero.css';
import dots from '../images/bg-dots.svg';

const Hero = () => {
  return (
    <section className='container'>
      <div className='hero-container'>
        <div className='left-side'>
          <h1>
            <span>A Simple Bookmark </span>{' '}
            <span className='span'>Manager</span>
          </h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className='btn-container'>
            <button className='btn-blue'>Get it on Chrome</button>
            <button className='btn-gray'>Get it on Chrome</button>
          </div>
        </div>

        <div className='right-side'>
          <div>
            <img src={hero} alt='hero' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
