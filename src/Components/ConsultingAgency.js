import React from 'react'
import img_Process from '../assets/images/Process.png'
import img_Planning from '../assets/images/planning.png'
import img_Design from '../assets/images/Design.png'
import img_Artificell from '../assets/images/Artificell.png'
import img_TeamPP from '../assets/images/TeamPP (2).jpg'

const ConsultingAgency = () => {
  return (
    <section className="consulting-agency">
    <div className="left-grid">
    
        <div className="section-title-consulting-agency">
            <div className="section-title-wrapper">
            <h6>Why Choose Us</h6>
            <h3>Why We Are The Best Business Consulting Agency</h3>
        </div>
        </div>
           
            <div className="icon-text-container">
                <a className="icon-text-item" href="#">
                <img className="Process" src={img_Process} alt="Process"/>
                <div className="text-content">
                <p>Process Excellence</p>
                <h5>Lorem, ipsum dolor sit amet consectetur.</h5>
            </div>
        </a>
            
            <a className="icon-text-item" href="#">
                <img className="Planning" src={img_Planning} alt="Planning"/>
                <div className="text-content">
                <p>Strategic planning</p>
                <h5>Lorem, ipsum dolor sit amet consectetur.</h5>
            </div>
        </a>
            
            
            <a className="icon-text-item" href="#">
                <img className="Design" src={img_Design} alt="Design"/>
                <div className="text-content">
                <p>Expirence Design</p>
                <h5>Lorem, ipsum dolor sit amet consectetur.</h5>
            </div>
        </a>
            
            <a className="icon-text-item" href="#">
                <img className="Artificell" src={img_Artificell} alt="Artificell"/>
                <div className="text-content">
                <p>Artificial Inteligence</p>
                <h5>Lorem, ipsum dolor sit amet consectetur.</h5>
            </div>
        </a>
        </div>
    
    </div>
        
        <div className="right-grid">
            <img className="TeamPP" src={img_TeamPP} alt="TeamPP" width="545" height="505"/>
            <div className="container">
            <div style={{ height: '200px' }}></div>
        </div>
        </div>
    

</section>
  )
}

export default ConsultingAgency