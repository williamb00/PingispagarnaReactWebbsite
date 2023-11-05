import React from 'react';
import img_backgroundLinesRight from '../assets/images/background-lines-right.svg'; // Importera bilden

const ServiceConsulting = () => {
  const arrowIconStyles = { color: '#ffffff' }; // Använd ett objekt för att sätta färger

  return (
    <section className="service-consulting">
      <div className="service-header">
        <p id="top-left">Our Services</p>
        <h1>We Provide the Best Service for Consulting</h1>
      </div>
      <div className="service-boxes">
        <div className="service-box">
          <h2>Business Advice</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
          <a href="#"><i className="fa-solid fa-arrow-right arrow-icon" style={arrowIconStyles}></i></a>
        </div>
        <div className="service-box">
          <h2>Startup Business</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
          <a href="#"><i className="fa-solid fa-arrow-right arrow-icon" style={arrowIconStyles}></i></a>
        </div>
        <div className="service-box">
          <h2>Financial Advice</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
          <a href="#"><i className="fa-solid fa-arrow-right arrow-icon" style={arrowIconStyles}></i></a>
        </div>
        <div className="service-box">
          <h2>Risk Management</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
          <a href="#"><i className="fa-solid fa-arrow-right arrow-icon" style={arrowIconStyles}></i></a>
        </div>
        <a className="btn-transparent" href="services.html">
          Browse Services<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <div className="container">
          <img className="backgroundLinesRight" src={img_backgroundLinesRight} alt="lines" />
        </div>
      </div>
    </section>
  );
};

export default ServiceConsulting;