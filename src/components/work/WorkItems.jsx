import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='project image' className='work__img' />
        <h3 className='work__title'>{item.title}</h3>
        <a href={item.projectLink} target="_blank" rel="noreferrer" className='work__button'>
            View <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
    </div>
  )
}

export default WorkItems;