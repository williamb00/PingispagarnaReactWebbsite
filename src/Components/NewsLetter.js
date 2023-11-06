import React from 'react'
import img_backgroundlinesright from '../assets/images/background-wavy-lines.svg'

const NewsLetter = () => {
  return (
    <section className="newsletter">
    <img className="backgroundlinesright" src={img_backgroundlinesright} alt="jvjhb"/>
    <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com"/>
                <button className="btn-red">Subscribe<i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></button>
            </form>

    </div>

</section>
  )
}

export default NewsLetter