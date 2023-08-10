import React from 'react'

const Frontend = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Frontend & Version Control</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>HTML</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>CSS</h3>
                        <span className='skills__level'>flexbox, grid, media-queries</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className='skills__level'>es6+, oops, dom</span>
                    </div>
                </div>

            </div>

            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Bootstrap</h3>
                        <span className='skills__level'>responsive layout</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Git</h3>
                        <span className='skills__level'>commits, clone, push, pull</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>React</h3>
                        <span className='skills__level'>hooks, router, redux</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Frontend;