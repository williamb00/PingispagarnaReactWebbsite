import React from 'react'
import img_Paperz from '../assets/images/paperz.png'
import img_Dorfus from '../assets/images/Dorfus.png'
import img_Martino from '../assets/images/Martino.png'
import img_Gobona from '../assets/images/Gobona.png'
import img_Square from '../assets/images/Square.png'

const Companies = () => {
  return (
    <section className="companies">
    <div className="Logos">
        <a className="Paperz" href="#">
        <img className="Paperz" src={img_Paperz} alt="Paperz"/>
        </a>
    <a className="Dorfus" href="#">
        <img className="Dorfus" src={img_Dorfus} alt="Dorfus"/>
    </a>
    <a className="Martino" href="#">
        <img className="Martino" src={img_Martino} alt="Martino"/>
    </a>
    <a className="Square" href="#">
        <img className="Square" src={img_Square}  alt="Square"/>
    </a>
    <a className="Gobona" href="#">
        <img className="Gobona" src={img_Gobona} alt="Gobona"/>
    </a>
    </div>

</section>
  )
}

export default Companies