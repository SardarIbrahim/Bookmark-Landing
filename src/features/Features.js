import React, { useState, useRef } from 'react';

import './features.css';
import FirstTab from '../images/illustration-features-tab-1.svg';
import SecondTab from '../images/illustration-features-tab-2.svg';
import ThirdTab from '../images/illustration-features-tab-3.svg';

import SingleFeature from './SingleFeature';

const headings = 'Bookmark in one click';
const para =
  'Organize your bookmarks however you like Our simple drag-and-drops interface gives you complete control over how you manage your favourite sites.';

const Features = () => {
  const [heading, setHeading] = useState(headings);
  const [text, setText] = useState(para);
  const [img, setImage] = useState(FirstTab);

  const handleActive = (e) => {
    // First Tab
    if (e.target.classList.contains('booking')) {
      setHeading((prevHeading) => {
        let newHeading = 'Bookmark in one click';
        return newHeading;
      });

      setText((prevText) => {
        let newText =
          'Organize your bookmarks however you like Our simple drag-and-drops interface gives you complete control over how you manage your favourite sites.';
        return newText;
      });

      setImage((prevImage) => {
        return FirstTab;
      });
    }

    // second Tab
    if (e.target.classList.contains('searching')) {
      setHeading((prevHeading) => {
        let newHeading = 'Intelligent Search';
        return newHeading;
      });

      setText((prevText) => {
        let newText =
          'Our Powerfull search feature will help you find saved sites in no time at all. No need to travel through all of your bookmarks';
        return newText;
      });

      setImage((prevImage) => {
        return SecondTab;
      });
    }

    // Third Tab
    if (e.target.classList.contains('sharing')) {
      setHeading((prevHeading) => {
        let newHeading = 'Share your bookmarks';
        return newHeading;
      });

      setText((prevText) => {
        let newText =
          'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
        return newText;
      });

      setImage((prevImage) => {
        let newImage = ThirdTab;
        return newImage;
      });
    }
  };

  return (
    <section className='container'>
      <div className='features'>
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmark sync between your devices so you can access
          them on the go
        </p>
      </div>

      <div className='bookings' onClick={(e) => handleActive(e)}>
        <h5
          className='item booking'
          style={{ color: 'hsl(229, 8%, 60%)', fontWeight: '500' }}
        >
          Simple Bookmarking
        </h5>
        <h5
          className='item searching'
          style={{ color: 'hsl(229, 8%, 60%)', fontWeight: '500' }}
        >
          Speedy Searching
        </h5>
        <h5
          className='item sharing'
          style={{ color: 'hsl(229, 8%, 60%)', fontWeight: '500' }}
        >
          Easy Sharing
        </h5>
      </div>

      <SingleFeature heading={heading} text={text} img={img} />
    </section>
  );
};

export default Features;
