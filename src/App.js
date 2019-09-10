import React from 'react';

import {BrowserRouter as Router, Route } from 'react-router-dom';


import './base.scss';

import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import FastContact from './components/fastContact/FastContact';
import Portfolio from './components/main/portfolio/Portfolio';
import Sluzby from './components/main/sluzby/Sluzby';
import About from './components/main/about/about';
import Contact from './components/main/contact/Contact';
import Home from './components/main/home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Navigation/>
        <main>
          <FastContact/>
          <Route exact path="/" component={Slider} />
          <Route exact path="/" component={Home} />
          
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/sluzby" component={Sluzby} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
