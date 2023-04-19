import React, { useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

import './accordion.css';

const Accordion = () => {
  const [firstAnswer, setAnswer] = useState('');
  const [secondAnswer, setSecondAnswer] = useState('');
  const [thirdAnswer, setThirdAnswer] = useState('');
  const [fourthAnswer, setFourthAnswer] = useState('');

  const handleAnswers = (e) => {
    console.log(e);
    if (e.target.classList.contains('firstQuestion')) {
      setAnswer((prevAnswer) => {
        let firstAnswer =
          'Book mark is a way to attach our data to the list so that we do not get lost after some time when we check on it and helps us in consistency';
        return firstAnswer;
      });

      setSecondAnswer('');
      setThirdAnswer('');
      setFourthAnswer('');
    }

    if (e.target.classList.contains('secondQuestion')) {
      setSecondAnswer((prevAnswer) => {
        let secondAnswer =
          'The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods). This message, and all other data sent between the client and the server, inte connection using TCP/IP.';
        return secondAnswer;
      });
      setAnswer('');
      setThirdAnswer('');
      setFourthAnswer('');
    }

    // Third Answer
    if (e.target.classList.contains('thirdQuestion')) {
      setThirdAnswer((prevAnswer) => {
        let thirdAnswer =
          'Yes there is a mobile application and To make mobile apps work a phone unwraps that package and maps the content out onto the storage of the phone, where it can then run as an app.';
        return thirdAnswer;
      });
      setAnswer('');
      setSecondAnswer('');
      setFourthAnswer('');
    }

    // fourth Answer
    if (e.target.classList.contains('fourthQuestion')) {
      setFourthAnswer((prevAnswer) => {
        const fourthAnswer =
          'Book mark is a way to attach our data to the list so that we don get lost after some time when we check on it and helps us in consistency';
        return fourthAnswer;
      });
      setAnswer('');
      setSecondAnswer('');
      setThirdAnswer('');
    }
  };

  return (
    <section className='container'>
      <div className='accordion'>
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <div className='handler' onClick={(e) => handleAnswers(e)}>
        {/* first Question */}
        <div className='questions'>
          <div className='question firstQuestion'>
            <p className='firstQuestion'>What is Bookmark?</p>
            <span id={firstAnswer ? 'show' : ''} className='firstQuestion'>
              <BsFillArrowDownCircleFill />
            </span>
          </div>

          <div className='answer' id={firstAnswer ? 'show' : ''}>
            <p>{firstAnswer}</p>
          </div>
        </div>

        {/* second Question */}
        <div className='questions '>
          <div className='question secondQuestion'>
            <p className='secondQuestion'>How can I request a browser?</p>
            <span id={secondAnswer ? 'show' : ''} className='secondQuestion'>
              <BsFillArrowDownCircleFill />
            </span>
          </div>

          <div className='answer' id={secondAnswer ? 'show' : ''}>
            <p>{secondAnswer}</p>
          </div>
        </div>

        {/* third Question */}
        <div className='questions'>
          <div className='question thirdQuestion'>
            <p className='thirdQuestion'>Is there a mobile application?</p>
            <span id={thirdAnswer ? 'show' : ''} className='thirdQuestion'>
              <BsFillArrowDownCircleFill />
            </span>
          </div>

          <div className='answer' id={thirdAnswer ? 'show' : ''}>
            <p>{thirdAnswer}</p>
          </div>
        </div>

        {/* fourth Question */}

        <div className='questions '>
          <div className='question fourthQuestion'>
            <p className='fourthQuestion'>What about chromium browsers?</p>
            <span id={fourthAnswer ? 'show' : ''} className='fourthQuestion'>
              <BsFillArrowDownCircleFill />
            </span>
          </div>

          <div className='answer' id={fourthAnswer ? 'show' : ''}>
            <p>{fourthAnswer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
