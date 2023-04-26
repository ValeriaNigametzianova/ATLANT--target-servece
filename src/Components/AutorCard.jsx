import React from 'react'
import Avatar from '../image/avatar_autor.png'
import '../css/autorCard.css'

const AutorCard = ({ name, info }) => {
  return (
    <div className="autorCard">
      <div className="avatar">
        <img className="avatar" src={Avatar} alt="" />
      </div>
      <div className="autor_info">
        <div className="h4">{name}</div>
        <div className="h5">{info}</div>
      </div>
    </div>
  )
}

export default AutorCard
