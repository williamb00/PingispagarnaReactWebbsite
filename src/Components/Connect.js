import React from 'react'
import img_backgroundlines from '../assets/images/background-lines2.svg'

const Connect = () => {
  return (
    <div className="container-contacts">
        <img className="background-lines" src={img_backgroundlines} alt=""/>
        <div className='header-contacts'>
        <a href="Home"><h5>Home</h5></a>
        <a href="Contacts"> <h5>Contact</h5> </a>
    </div>
    <h1>Let's Connect</h1>
  </div>
  )
}

export default Connect