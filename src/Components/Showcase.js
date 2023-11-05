import React from 'react'
import img_ppshowcase from '../assets/images/PPshowcase.jpg'
import img_backgroundlines from '../assets/images/background-lines2.svg'

const Showcase = () => {
  return (
    <section className="showcase">
    <img className="background-lines" src={img_backgroundlines} alt=""/>
    <div className="container">
        <div className="content">
            <h1>We Provide High Quality Videos For Table Tennis</h1>
            <p>Our vision is to help Table Tennis coaches and players all over the world with their training, work and development. We can do that by Online Coaching and Arrange Camps.</p>
            <a className= "btn-red" href="ppmerch.html">Buy Merch <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
            <a className= "btn-transparent" href="videos.html">Buy Online Coaching<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        <img className= "ppshowcase" src={img_ppshowcase} alt="showcase image" width="500" height="500"/>
    </div>

        </section>
  )
}

export default Showcase