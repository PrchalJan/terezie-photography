import React from 'react';
import Siema from 'siema';

import './slider.scss';

import prevIcon from './icons/previous.svg';
import nextIcon from './icons/next.svg';

import firstImage from './../../images/portfolio/detail/1.jpg';
import secondImage from './../../images/portfolio/portraits/2.jpg';
import thirdImage from './../../images/portfolio/portraits/3.jpg';
import fourthImage from './../../images/portfolio/portraits/4.jpg';
import fifthImage from './../../images/portfolio/portraits/5.jpg';
import sixthImage from './../../images/portfolio/portraits/6.jpg';
import seventhImage from './../../images/portfolio/nature/03.jpg';
import eighthImage from './../../images/portfolio/nature/04.jpg';
import ninethImage from './../../images/portfolio/nature/05.jpg';
import tenthImage from './../../images/portfolio/nature/06.jpg';

class Slider extends React.Component{
  constructor(){
    super();
    this.siema = undefined;

  }

  

  componentDidMount(){
    const mySiema = new Siema({
      perPage: 3,
      duration: 300,
      loop: true,
      easing: 'ease-out',
    });

    this.siema = mySiema;
  }

  slideRight = ()=>{
    this.siema.next();
  }
  slideLeft = ()=>{
    this.siema.prev();
  }


  
  // document.querySelector('.siema-btn__left').addEventListener('click', () => mySiema.prev());
  // document.querySelector('.siema-btn__right').addEventListener('click', () => mySiema.next());

  render(){
    return(
      <section className="slider">
        <div onClick={this.slideLeft} className="slider-btn siema-btn__left">
          <img className="left-icon" src={prevIcon} alt=""/>
        </div>
        <div onClick={this.slideRight} className="slider-btn siema-btn__right">
          <img className="right-icon" src={nextIcon} alt=""/>
        </div>
        <div className="siema">
  
          <div className="siema-item"><img className="siema-image" src={firstImage}/></div>
          <div className="siema-item"><img className="siema-image" src={secondImage}/></div>
          <div className="siema-item"><img className="siema-image" src={thirdImage}/></div>
          <div className="siema-item"><img className="siema-image" src={fourthImage}/></div>
          <div className="siema-item"><img className="siema-image" src={fifthImage}/></div>
          <div className="siema-item"><img className="siema-image" src={sixthImage}/></div>
          <div className="siema-item"><img className="siema-image" src={seventhImage}/></div>
          <div className="siema-item"><img className="siema-image" src={eighthImage}/></div>
          <div className="siema-item"><img className="siema-image" src={ninethImage}/></div>
          <div className="siema-item"><img className="siema-image" src={tenthImage}/></div>
  

  
        </div>
      </section>
    )
  }

  
}

export default Slider;