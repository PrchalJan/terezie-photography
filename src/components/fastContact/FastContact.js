import React from 'react';

import './fast-contact.scss';


function FastContact(){
  return(
    <section className="info">
      <p className="info__data info__email"><a className="info__link" href="mailto: terezie@terezieprchalova.cz">terezie@terezieprchalova.cz</a></p>
      <p className="info__data info__phone"><a className="info__link" href="tel:+420-608-297-238"></a>+420 608 297 238</p>
    </section>
  )
}

export default FastContact;