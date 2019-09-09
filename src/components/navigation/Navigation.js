import React from 'react';

import './navigation.scss';


function Navigation(){
  return(
    <nav className="nav">
      <div className="nav-wrapper">
        <ul className="nav__ul">
          <li className="nav__li"><a className="nav__link" href="#">Portfolio</a></li>
          <li className="nav__li"><a className="nav__link" href="#">Služby</a></li>
          <li className="nav__li"><a className="nav__link" href="#">O mě</a></li>
          <li className="nav__li"><a className="nav__link" href="#">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;