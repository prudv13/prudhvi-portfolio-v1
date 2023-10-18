import React from 'react'
import './qualification.css'

const Experience = () => {
  return (
    <div className='qualification__content'>
      <h3 className='qualification__title'>Experience</h3>
      <div className='qualification__box'>
          <div className='qualification__group'>

            <div className='qualification__data'>
              <i className='uil uil-briefcase-alt qualification__icon'></i>
              <div>
                  <h3 className='qualification__name'>Frontend Teaching Assistant</h3>
                  <span className='qualification__level'>Nxt Wave</span>
                  <i className='uil uil-calendar-alt'></i> Oct, 2023 - Present
              </div>
            </div>

            <div className='qualification__data'>
              <i className='uil uil-briefcase-alt qualification__icon'></i>
              <div>
                  <h3 className='qualification__name'>Software Engineer 2</h3>
                  <span className='qualification__level'>Imaginnovate</span>
                  <i className='uil uil-calendar-alt'></i> Oct, 2022 - May, 2023
              </div>
            </div>

            <div className='qualification__data'>
              <i className='uil uil-briefcase-alt qualification__icon'></i>
              <div>
                  <h3 className='qualification__name'>Technology Head, Co-Founder</h3>
                  <span className='qualification__level'>Sattvic Aquaponics</span>
                  <i className='uil uil-calendar-alt'></i> Nov, 2018 - Aug, 2021
              </div>
            </div>

            <div className='qualification__data'>
              <i className='uil uil-briefcase-alt qualification__icon'></i>
              <div>
                  <h3 className='qualification__name'>Application Development Associate</h3>
                  <span className='qualification__level'>Accenture</span>
                  <i className='uil uil-calendar-alt'></i> Jul, 2018 - Oct, 2018
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Experience;