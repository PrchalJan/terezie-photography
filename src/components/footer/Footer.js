import React from 'react';

import './footer.scss';

import instagramIcon from './icons/instagram.svg';
import facebookIcon from './icons/facebook.svg';


function Footer(){
  return(
    <footer className="footer">
      <div className="footer__container footer__row">
        <section className="footer__content">
          <h3 className="footer__h3">Footer Content Header</h3>
          <p className="footer__p">Footer Content</p>
        </section>
        <section className="footer__links links">
          {/* <h3 className="links__h3">Links</h3> */}
          <ul className="links__ul">
            <li className="links__li"><a className="links__link" href="https://www.instagram.com/terezieprchalova/" target="_blank"><img className="links__icon" src={instagramIcon} alt=""/></a></li>
            <li className="links__li"><a className="links__link" href="https://www.facebook.com/" target="_blank"><img className="links__icon" src={facebookIcon} alt=""/></a></li>
          </ul>
        </section>
        
      </div>
      <div className="container">
        <section className="footer__copy copy">
          <p className="copy__p">© 2019 Terezie Prchalová</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer;