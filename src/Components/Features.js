import React from 'react'
import img_ikon1 from '../assets/images/Icon.png'
import img_ikon2 from '../assets/images/Icon (1).png'
import img_ikon3 from '../assets/images/Icon (2).png'
import img_ikon4 from '../assets/images/Icon (3).png'

const Features = () => {
  return (
    <section className="features">
<div className="container-border">
    <div className="container1">
        <p>Features</p>
        <h2>Our Accounting is trusted by thousand of companies</h2>
        <a className= "btn-red" href="learnmore.html">Learn More <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>


    <div className="container2">
        <a className="profile-1" href="#">
        <img className="Ikon1" src={img_ikon1} alt="Ikon 1"/>
        <h5>Business Advice</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </a>
    <a className="profile-2" href="#">
        <img className="Ikon2" src={img_ikon2} alt="Ikon 2"/>
        <h5>Financial Advice</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </a>
    </div>


    <div className="container3">
        <a className="profile-3" href="#">
        <img className="Ikon3" src={img_ikon3} alt="Ikon 3"/>
        <h5>Startup Business</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </a>
    <a className="profile-4" href="#">
        <img className="Ikon4" src={img_ikon4} alt="Ikon 4"/>
        <h5>Risk Management</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </a>
    </div>
</div>

</section>

  )
}

export default Features