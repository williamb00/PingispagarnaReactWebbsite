import React from 'react'
import img_Image1 from '../assets/images/articleimage1.jpg'
import img_Image2 from '../assets/images/articleimage2.jpg'
import img_Image3 from '../assets/images/articleimage3.jpg'
import img_Image4 from '../assets/images/articleimage4.jpg'

const ProjectCase = () => {
  return (
    <section className="project-and-case">
    <div className="container">
    <div className="section-title">
        <p>Project and Events</p>
        <h2>Take a look at PP-Community</h2>
    </div>
    <div className="project-and-cases">
        <a className= "project" href="#">
            <img className="Image1" src={img_Image1} alt="Gathering with much people" width="645" height="350"/>
            <h3>Arranged Camps</h3>
            <div className="readmore">Read More <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </div>
        </a>
        <a className= "project" href="#">
            <img className="Image2" src={img_Image2} alt="Girl and a boy plays" width="645" height="350"/>
            <h3>Online Coaching</h3>
            <div className="readmore">Read More <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </div>
        </a>
        <a className= "project" href="#">
            <img className="Image3" src={img_Image3} alt="2 man infront of a store" width="645" height="350"/>
            <h3>Partnership and Sponsors</h3>
            <div className="readmore">Read More <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </div>
        </a>
        <a className= "project" href="#">
            <img className="Image4" src={img_Image4} alt="2 people plays table tennis at a event with a lot of people" width="645" height="350"/>
            <h3>Events</h3>
            <div className="readmore">Read More <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </div>
        </a>
    </div>
    <div className="center-content">
    <a className= "btn-black" href="projects.html">All Recent Projects<i className= "fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
    </div>


</section>
  )
}

export default ProjectCase