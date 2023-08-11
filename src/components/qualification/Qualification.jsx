import React from 'react'
import './qualification.css'
import Education from './Education';
import Experience from './Experience';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className='skills__container container grid'>
            <Education />
            <Experience />
        </div>
    </section>
  )
}

export default Skills;