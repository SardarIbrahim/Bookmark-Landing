import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';
import Features from './features/Features';
import Download from './downloads/Download';
import Accordion from './accordion/Accordion';
import Form from './form/Form';
import Footer from './footer/Footer';

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <Download />
      <Accordion />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
