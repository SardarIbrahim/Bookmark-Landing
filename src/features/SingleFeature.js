import React from 'react';

import './singlefeature.css';

const SingleFeature = ({ heading, text, img }) => {
  return (
    <section className='container'>
      <div className='feature-container'>
        <div className='feature-left-side'>
          <div>
            <img src={img} alt='feature' />
          </div>
        </div>

        <div className='feature-right-side'>
          <h1>
            <span>{heading}</span>
          </h1>
          <p>{text}</p>
          <button className='btn-blue'>More Info</button>
        </div>
      </div>
    </section>
  );
};

export default SingleFeature;
