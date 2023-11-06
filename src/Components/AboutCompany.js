import React from 'react'
import img_CBSIS from '../assets/images/CB&SIS.jpg'

const circlePlayStyle = {
    color: '#191919',
    fontSize: '34px'
  };

const AboutCompany = () => {
  return (
    <section className="about-our-company">
<div className="container">
    <div className="left-section">
        <img className="CBSIS" src={img_CBSIS} alt="CBSIS" width="100%"/>
        <div className="image-overlay">
            <h5>Christian Björklund & Loa Schoug, <h5 className="founders-text">Founders</h5></h5>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
        </div>
    </div>
    <div className="right-section">
        <div className="about-company">About Company</div>
        <div className="company-name">We Are Business Consulting & Credit Repair Experts</div>
        <p className="small-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
        <p className="small-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
        <div className="button-container">
        <a className="btn-black" href="company.html">Learn More <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
        <a className="circle-play-container" href="#">
            <i className="fa-sharp fa-regular fa-circle-play" style={circlePlayStyle}></i>
            <span className="intro-video-text">Intro Video</span>
        </a>
        </div>
    </div>
</div>
</section>
  )
}

export default AboutCompany