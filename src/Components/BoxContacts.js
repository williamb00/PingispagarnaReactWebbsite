import React from 'react';
import img_Icon11 from '../assets/images/Icon (4).png';
import img_Icon22 from '../assets/images/Icon (5).png';
import img_Icon33 from '../assets/images/Icon (6).png';

const BoxContacts = () => {
  return (
    <div className="container-boxes">
      {/* Box 1 */}
      <div className="box visit">
        <a href="https://astorp.se/uppleva-och-gora/arena-astorp.html" target="_blank">
          <img className="Icon" src={img_Icon11} alt="Visit us" />
        </a>
        <div className="text">
          <h4>Visit us</h4>
          <p className="gray">Trädgårdsgatan 63</p>
          <p className="gray">265 36 ÅSTORP</p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="box call">
        <a href="tel:+4612147050">
          <img className="Icon" src={img_Icon22} alt="Call us" />
        </a>
        <div className="text">
          <h4>Call us</h4>
          <p className="gray">+46 (8) 121 470 50</p>
          <p className="gray">+46 (8) 121 470 51</p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="box email">
        <a href="mailto:pingispagarna@gmail.com">
          <img className="Icon" src={img_Icon33} alt="Email us" />
        </a>
        <div className="text">
          <h4>Email us</h4>
          <p className="gray">pingispagarna@gmail.com</p>
          <p className="gray">info@pingispagarna.se</p>
        </div>
      </div>
    </div>
  );
};

export default BoxContacts;
