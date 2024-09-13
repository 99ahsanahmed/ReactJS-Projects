import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    
    <div className='card'>
        <h3>{props.title} </h3>
        <p> {props.description}  </p>
    </ div>

  )
}

export default Card

