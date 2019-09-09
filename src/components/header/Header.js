import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';


function Header(){
  return (
    <header className="header">
      <h1 className="header__h1">
        <Link className="header__link" to="/">Terezie Prchalová</Link>
      </h1>
      <h2 className="header__h2">
        <Link className="header__link" to="/">Photography</Link>
      </h2>
    </header>
  )
}

export default Header;