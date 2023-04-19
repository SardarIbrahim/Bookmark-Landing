import React from 'react';

import './download.css';
import chrome from '../images/logo-chrome.svg';
import opera from '../images/logo-opera.svg';
import firefox from '../images/logo-firefox.svg';
import dots from '../images/bg-dots.svg';

const Download = () => {
  return (
    <section className='container'>
      <div className='downloads'>
        <h1>Download the extension</h1>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <div className='extensions'>
        <div className='extension-card'>
          <div className='ext-img'>
            <img src={chrome} alt='' />
          </div>
          <h2>Add to Chrome</h2>
          <p>Minimum version 62</p>

          <div className='add-btn'>
            <div className='dots'>
              <img src={dots} alt='' />
            </div>

            <button>Add & Install Extension</button>
          </div>
        </div>

        {/* second card */}

        <div className='extension-card'>
          <div className='ext-img'>
            <img src={firefox} alt='' />
          </div>
          <h2>Add to FireFox</h2>
          <p>Minimum version 55</p>

          <div className='add-btn'>
            <div className='dots'>
              <img src={dots} alt='' />
            </div>

            <button>Add & Install Extension</button>
          </div>
        </div>

        {/* Third card */}
        <div className='extension-card'>
          <div className='ext-img'>
            <img src={opera} alt='' />
          </div>
          <h2>Add to Opera</h2>
          <p>Minimum version 46</p>

          <div className='add-btn'>
            <div className='dots'>
              <img src={dots} alt='' />
            </div>

            <button>Add & Install Extension</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
