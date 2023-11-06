import React from 'react'
import img_Camerman from '../assets/images/Cameraman.jpg'
import img_PPinspelning from '../assets/images/PP.inspelning.jpg'
import img_LoaVsDjole from '../assets/images/loavsdjole.jpg'

const Articles = () => {
  return (
    <section className="Article-and-News">
    <div className="article-grid">
        <div className="header-text">
            <p>Article & News</p>
            <h2>Get Every Single Article & News</h2>
        </div>
       

        <a className="article" href="#">
            <div className="image-container">
            <img className="Cameraman" src={img_Camerman} alt="Cameraman"/>
            <div className="yellow-box">
                <div className="date">28</div>
            <div className="month">Mar</div>
            </div>
        </div>
            <p>Bussiness</p>
            <h6>How To Use Digitalization In The Classroom</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
    </a>

        
        <a className="article" href="#">
            <div className="image-container">
            <img className="PPinspelning" src={img_PPinspelning} alt="PP-inspelning"/>
            <div className="yellow-box">
                <div className="date">3</div>
            <div className="month">June</div>
            </div>
        </div>
            <p>Bussiness</p>
            <h6>How To Implement Chat GPT In Your Projects</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
    </a>

       
        <a className="article" href="#">
            <div className="image-container">
            <img className="LoaVsDjole" src={img_LoaVsDjole} alt="Loa VS Djole"/>
            <div className="yellow-box">
                <div className="date">12</div>
            <div className="month">Nov</div>
            </div>
        </div>
            <p>Bussiness</p>
            <h6>The Guide To Support Modern CSS Design</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
    </a>
        <button className="btn-transparent">Browse Articles<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></button>
        <div className="dot-container">
            <div className="dot black-dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
    
</section>
  )
}

export default Articles