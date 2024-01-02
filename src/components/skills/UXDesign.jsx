import React from 'react'

const UXDesign = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>UX Design</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Empathize</h3>
                        <span className='skills__level'>user interviews, empathy maps, Personas, Journey</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Define</h3>
                        <span className='skills__level'>problem, hypothesis, value proposition</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Ideate</h3>
                        <span className='skills__level'>goal, user flow, storyboard, IA, competitive analysis</span>
                    </div>
                </div>

            </div>

            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Design</h3>
                        <span className='skills__level'>design system, wireframes, prototypes</span>
                    </div>
                </div>
                
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Test</h3>
                        <span className='skills__level'>Usability study, User acceptance test</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>UX Research</h3>
                        <span className='skills__level'>foundational, design, post-launch research</span>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default UXDesign;