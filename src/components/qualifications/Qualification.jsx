import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState === 1 ? "qualification__button qualification__active button__flex": "qualification__button button__flex"}
                    onClick={() => toggleTab(1)}
                >
                    <i className='uil uil-graduation-cap qualification__icon'></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button__flex": "qualification__button button__flex"}
                    onClick={() => toggleTab(2)}
                >
                    <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
                </div>
            </div>

            <div className='qualification__sections'>
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Full Stack Developer Trainee</h3>
                            <span className='qualification__subtitle'>Nxt Wave</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>B.Tech, EEE</h3>
                            <span className='qualification__subtitle'>Gitam University</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i> 2014 - 2018
                            </div>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Intermediate</h3>
                            <span className='qualification__subtitle'>Narayana Institute</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i> 2012 - 2014
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>10th Grade</h3>
                            <span className='qualification__subtitle'>St.Francis de Sales School</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i> 2001 - 2012
                            </div>
                        </div>
                    </div>
                </div>


                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Software Engineer 2</h3>
                            <span className='qualification__subtitle'>Imaginnovate</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i> Oct, 2022 - May, 2023
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>Technology Head, Co-Founder</h3>
                            <span className='qualification__subtitle'>Sattvic Aquaponics</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i> Nov, 2018 - Aug, 2021
                            </div>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Application Development Associate</h3>
                            <span className='qualification__subtitle'>Accenture</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i> Jul, 2018 - Oct, 2018
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification;