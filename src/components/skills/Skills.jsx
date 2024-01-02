import React from 'react'
import './skills.css'
import WebDevelopment from './WebDevelopment';
import UXDesign from './UXDesign';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My Technical level</span>

        <div className='skills__container container grid'>
            <UXDesign />
            <WebDevelopment />
        </div>
    </section>
  )
}

export default Skills;