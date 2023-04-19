import React, { useState, useRef } from 'react';

import './form.css';

const Form = () => {
  const [value, setValue] = useState('');
  const errorContainer = useRef();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = isValidEmail(value);

    if (!validEmail) {
      errorContainer.current.classList.add('show');
      errorContainer.current.innerText = 'Whoops, make sure its an email';
      setTimeout(() => {
        errorContainer.current.classList.remove('show');
      }, 1500);
    }

    if (validEmail) {
      errorContainer.current.classList.add('show');
      errorContainer.current.classList.add('success');
      errorContainer.current.innerText = 'Email sent successfully';
      setTimeout(() => {
        errorContainer.current.classList.remove('show');
        errorContainer.current.classList.remove('success');
      }, 1500);

      setValue((prevValue) => {
        prevValue = '';
        return prevValue;
      });
    }
  };

  return (
    <section className='form'>
      <p>35,000+ ALREADY JOINED</p>
      <h1>
        <span>Stay up-to-date with that</span> <span>we're doing</span>{' '}
      </h1>

      <form className='form-control'>
        <input
          type='text'
          placeholder='Enter your email address'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <p className='error' ref={errorContainer}></p>

        <button
          className='btn-contact'
          type='submit'
          onClick={(e) => handleSubmit(e)}
        >
          Contact Us
        </button>
      </form>
    </section>
  );
};

export default Form;
