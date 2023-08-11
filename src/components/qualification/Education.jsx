import React from 'react'
import './qualification.css'

const Education = () => {
  return (
    <div className='qualification__content'>
      <h3 className='qualification__title'>Education</h3>
      <div className='qualification__box'>
          <div className='qualification__group'>
            <div className='qualification__data'>
              <i className='uil uil-graduation-cap qualification__icon'></i>
              <div>
                  <h3 className='qualification__name'>Full Stack Developer Trainee</h3>
                  <span className='qualification__level'>Nxt Wave</span>
                  <i className='uil uil-calendar-alt'></i> 2021 - Present
              </div>
            </div>

            <div className='qualification__data'>
              <i className='uil uil-graduation-cap qualification__icon'></i>
              <div>
                  <h3 className='qualification__name'>B.Tech, EEE</h3>
                  <span className='qualification__level'>Gitam University</span>
                  <i className='uil uil-calendar-alt'></i>  2014 - 2018
              </div>
            </div>

            <div className='qualification__data'>
              <i className='uil uil-graduation-cap qualification__icon'></i>
              <div>
                  <h3 className='qualification__name'>Intermediate</h3>
                  <span className='qualification__level'>Narayana Institute</span>
                  <i className='uil uil-calendar-alt'></i>  2012 - 2014
              </div>
            </div>

            <div className='qualification__data'>
              <i className='uil uil-graduation-cap qualification__icon'></i>
              <div>
                  <h3 className='qualification__name'>10th Class</h3>
                  <span className='qualification__level'>St.Francis de Sales School</span>
                  <i className='uil uil-calendar-alt'></i> 2001 - 2012
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Education;