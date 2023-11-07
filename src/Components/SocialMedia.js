import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <section className="text-social-media">
    <p>© 2020 Pingispågarna - Table Tennis Company. All Rights Reserved.</p>
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
</section>
  )
}

export default SocialMedia