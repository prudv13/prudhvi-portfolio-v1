import React from 'react'

const Backend = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Backend & DevOps</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Java</h3>
                        <span className='skills__level'>oops, collections</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Spring Boot</h3>
                        <span className='skills__level'>jpa, jdbc, security</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>SQL Server</h3>
                        <span className='skills__level'>crud, joins</span>
                    </div>
                </div>

            </div>

            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Postman</h3>
                        <span className='skills__level'>api testing</span>
                    </div>
                </div>
                
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>Docker</h3>
                        <span className='skills__level'>dockerfile, containerize</span>
                    </div>
                </div>

                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className='skills__name'>CI/CD</h3>
                        <span className='skills__level'>dev, tst deployment</span>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Backend;