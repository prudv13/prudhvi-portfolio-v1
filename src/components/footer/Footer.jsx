import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer__container container'>
            <h1 className='footer__title'>Prudhvi.</h1>

            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>

                <li>
                    <a href="#qualification" className='footer__link'>Qualifications</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href='https://twitter.com/prudv_13' target="_blank" rel="noreferrer" className='footer__social-link'>
                    <i class="bx bxl-twitter"></i>
                </a>

                <a href='https://www.linkedin.com/in/prudhvi-raj06/' target="_blank" rel="noreferrer" className='footer__social-link'>
                    <i class='bx bxl-linkedin-square'></i>
                </a>

                <a href='https://www.behance.net/prudhviraj43' target="_blank" rel="noreferrer" className='footer__social-link'>
                    <i class="bx bxl-behance"></i>
                </a>
            </div>

            <span className='footer__copy'>
            &#169; Prudhvi. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer;