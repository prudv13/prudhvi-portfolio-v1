import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <a href='#qualification' className='about__box'>
            <i class="bx bx-award about__icon"></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>1+ yrs hands-on</span>
        </a>

        <a href='#portfolio' className='about__box'>
            <i class="uil uil-briefcase about__icon"></i>
            <h3 className='about__title'>Projects</h3>
            <span className='about__subtitle'>my recent works</span>
        </a>

        <a href='#contact' className='about__box'>
            <i class="bx bx-support about__icon"></i>
            <h3 className='about__title'>Contact</h3>
            <span className='about__subtitle'>via mail, chat</span>
        </a>
    </div>
  )
}

export default Info;
