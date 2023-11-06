import React from 'react'
import img_WB from '../assets/images/wb.png'
import img_Loa from '../assets/images/loa.png'
import img_Emile from '../assets/images/emile.png'
import img_CB from '../assets/images/CB.png'
import img_Customer1 from '../assets/images/Customer (1).png'
import img_Customer3 from '../assets/images/Customer (3).png'
import img_Customer4 from '../assets/images/Customer (4).png'


const Team = () => {
  return (
    <section className="meet-our-team">
    <div className="container">
        <div className="section-title">
            <p>Meet our team</p>
            <h2>Expirence team members</h2>
        </div>
        <div className="meet-our-team-members">
            <a className= "members" href="#">
                <img className="WB" src={img_WB} alt="" width="308" height="420"/>
                <h3>William Björklund</h3>
                <p>Table Tennis Coach/Player</p>
            </a>
            <a className= "members" href="#">
                <img className="Loa" src={img_Loa} alt="" width="308" height="420"/>
                <h3>Loa Schoug</h3>
                <p>Table Tennis Coach/Player</p>
            </a>
            <a className= "members" href="#">
                <img className="Emile" src={img_Emile} alt="" width="308" height="420"/>
                <h3>Emile Zaidan</h3>
                <p>Producer and Video Editor</p>
            </a>
            <a className= "members" href="#">
                <img className="CB" src={img_CB} alt="" width="308" height="420"/>
                <h3>Christian Björklund</h3>
                <p>Table Tennis Coach</p>
            </a>
            <button className="btn-transparent">Browse Team<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></button>
            <div className="dot-container">
            <div className="dot"></div>
            <div className="dot black-dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
        </div>
        
        <div className="testimonial">
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Clients Say</h2>
            </div>

            <div className="testimonial-content">
                
            <div className="stars">
                
                <div className="testimonial-item">
                <div className="star-group">
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <img className="Customer1" src={img_Customer1} alt="Profilbild 1"/>
                </div>
            </div>
                
                
                <div className="testimonial-item">
                <div className="star-group">
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <img className="Customer3" src={img_Customer3} alt="Profilbild 1"/>
                </div>
                </div>
                
                
                <div className="testimonial-item">
                <div className="star-group">
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#f94d1c' }}></i>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <img className="Customer4" src={img_Customer4} alt="Profilbild 1"/>
                </div>
                </div>
            </div>
            <div className="center-content">
                <a className= "btn-black" href="projects.html">All Reviews<i className= "fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Team