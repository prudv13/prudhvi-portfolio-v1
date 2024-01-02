import React from 'react'

const WebDevelopment = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Web Development</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>HTML, CSS</h3>
                        <span className='skills__level'>semantic html, forms, flexbox, grid, media queries</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Bootstrap</h3>
                        <span className='skills__level'>responsive layout, components</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className='skills__level'>es6+, oops, dom, asynchronous, forms, validations</span>
                    </div>
                </div>

            </div>

            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>React</h3>
                        <span className='skills__level'>hooks, router, context api, redux, react query, webpack</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Spring Boot</h3>
                        <span className='skills__level'>jpa, jdbc, rest api, security, xml, junit</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>SQL</h3>
                        <span className='skills__level'>crud operations, joins</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default WebDevelopment;