import React from 'react';

import { Link } from 'react-router-dom';

import './navigation.scss';


function Navigation(){
  return(
    <nav className="nav">
      <div className="nav-wrapper">
        <ul className="nav__ul">
          <li className="nav__li"><Link className="nav__link" to="/portfolio">Portfolio</Link></li>
          <li className="nav__li"><Link className="nav__link" to="/sluzby">Služby</Link></li>
          <li className="nav__li"><Link className="nav__link" to="/about">O mě</Link></li>
          <li className="nav__li"><Link className="nav__link" to="/contact">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;