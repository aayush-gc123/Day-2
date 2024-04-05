import React from 'react'

const Cards = (props) => {
  return (
    <div className='cards'>
   
      <div className="card-box">
    <h1>{props.title}</h1>
    <p>{props.des}</p>
      </div>
    </div>
  )
}

export default Cards
