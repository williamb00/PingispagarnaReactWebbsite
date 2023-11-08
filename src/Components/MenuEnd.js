import React from 'react'
import img_logotype from '../assets/images/logotypepp1.gif'
import img_backgroundlineswhiteright from '../assets/images/background-lines-white-right.svg'

const MenuEnd = () => {
  return (
    <section className="Menu-end">
<div className="grid-container">
    
    <div className="showcase-fraction">
        <a href="Home"><img className="logotype" src={img_logotype} alt="Pingispågarna" width="110" height="95"/></a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
    </div>
    
    <div className="fraction">
        <a href="#"><h4>Company</h4></a>
        <a href="#"><p>About</p></a>
        <a href="#"><p>Features</p></a>
        <a href="#"><p>Work</p></a>
        <a href="#"><p>Career</p></a>
    </div>
    
    <div className="fraction">
        <a href="#"><h4>Help</h4></a>
        <a href="#"><p>Customer Support</p></a>
        <a href="#"><p>Delivery Details</p></a>
        <a href="#"><p>Terms & Conditions</p></a>
        <a href="#"><p>Privacy Policy</p></a>
    </div>
    
    <div className="fraction">
        <a href="#"><h4>Resources</h4></a>
        <a href="#"><p>Free eBooks</p></a>
        <a href="#"><p>Development Tutorial</p></a>
        <a href="#"><p>How to Blog</p></a>
        <a href="#"><p>Youtube Playlist</p></a>
    </div>
    
    <div className="fraction">
        <a href="#"><h4>Link</h4></a>
        <a href="#"><p>Free eBooks</p></a>
        <a href="#"><p>Development Tutorial</p></a>
        <a href="#"><p>How to Blog</p></a>
        <a href="#"><p>Youtube Playlist</p></a>
    </div>
</div>
<div className="lines">
<img className="backgroundlineswhiteright" src={img_backgroundlineswhiteright} alt="Linjer"/>
</div>
</section>
  )
}

export default MenuEnd