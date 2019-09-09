import React from 'react';
import './base.scss';

import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import FastContact from './components/fastContact/FastContact';

function App() {
  return (
    <div className="app">
      <Header/>
      <Navigation/>
      <main>
        <FastContact/>
        <Slider/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
