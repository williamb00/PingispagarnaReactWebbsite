import React from 'react'
import img_Icon11 from '../assets/images/Icon (4).png'
import img_Icon22 from '../assets/images/Icon (5).png'
import img_Icon33 from '../assets/images/Icon (6).png'

const BoxContacts = () => {
  return (
    <div className="container-boxes">
  <div className="box visit">
  <img className="Icon11" src={img_Icon11} alt=""/>
    <div className="text">
      <h4>Visit us</h4>
      <p className="gray">Sveavägen 31</p>
      <p className="gray">111 34 Stockholm</p>
    </div>
  </div>
  <div className="box call">
  <img className="Icon22" src={img_Icon22} alt=""/>
    <div className="text">
      <h4>Call us</h4>
      <p className="gray">+46 (8) 121 470 50</p>
      <p className="gray">+46 (8) 121 470 51</p>
    </div>
  </div>
  <div className="box email">
  <img className="Icon33" src={img_Icon33} alt=""/>
    <div className="text">
      <h4>Email us</h4>
      <p className="gray">pingispagarna@gmail.com</p>
      <p className="gray">info@pingispagarna.se</p>
    </div>
  </div>
</div>
  )
}

export default BoxContacts
