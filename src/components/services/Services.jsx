import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='services section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I Offer</span>

        <div className='services__container container grid'>
            <div className='services__content'>
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className='services__title'>UI/UX <br /> Design</h3>
                </div>
                
                <span className='services__button' onClick={() => toggleTab(1)}>
                View More <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>UI/UX Design</h3>
                        <p className='services__modal-description'>
                            Service with hands-on experience. Providing quality work to clients and companies.
                        </p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Create Userflows.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>High Fidelity Wireframing.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>UX Rsearch - user jouney maps, competitive audit.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Design high fidelity prototypes.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>Frontend <br /> Development</h3>
                </div>
            
                <span className='services__button' onClick={() => toggleTab(2)}>
                View More <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>Frontend Development</h3>
                        <p className='services__modal-description'>
                            Service with hands-on experience. Providing quality work to clients and companies.
                        </p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Develop the user interfaces.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Create single page applications.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Implement responsive web design and development.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Integrating APIs with performance optimization.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services__title'>Backend <br /> Development</h3>
                </div>
            
                <span className='services__button' onClick={() => toggleTab(3)}>
                    View More <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>Backend Development</h3>
                        <p className='services__modal-description'>
                            Service with hands-on experience. Providing quality work to clients and companies.
                        </p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Create APIs that allow different parts of the application to communicate with each other.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Implement security measures to protect user data and the application.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Design and optimize database schemas, write queries, and ensure efficient data storage and retrieval.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Upgrading the application to newer versions and optimizing the test cases.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;