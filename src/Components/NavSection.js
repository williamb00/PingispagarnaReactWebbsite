import React from 'react'
import img_logotype from '../assets/images/logotypepp1.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const NavSection = () => {
  return (
    <section className="container">

        <a href="Home"><img className="logotype" src={img_logotype} alt="Pingispågarna" width="110" height="95"/></a>
        <button className="menu-bars"><i className="fa-sharp fa-solid fa-bars-staggered fa-rotate-180 fa-lg"></i></button>
        <div className="menu">
        <div className="top-menu">
            <div className="contact-information">
                <div className="content-box">
                    <i className="fa-duotone fa-phone fa-lg"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="content-box">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                    william.bjorklund.00@gmail.com
                </div>
                <div className="content-box last">
                    <i className="fa-light fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div className="social-media">
            <a href="https://www.facebook.com/Pingispagarna" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/pingispagarna/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@Pingispagarna/featured" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.tiktok.com/@pingispagarna" target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
            </div>
        </div>
            <div className="main-menu">
                <nav>
                    <a href="Home">Home</a>
                    <a href="videos.html">Videos</a>
                    <a href="aboutus.html">About us</a>
                    <a href="ppmerch.html">PP Merch</a>
                    <a href="Contacts">Contact</a>
                </nav>
                <a className= "btn-red" href="login.html">Login <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            </div>
        </section>
  )
}

export default NavSection