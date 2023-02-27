import React from 'react'
import Avatar from '../image/avatar_autor.png'
import '../css/autorCard.css'

const AutorCard = () => {
  return (
    <div className="autorCard">
      <div className="avatar">
        <img className="avatar" src={Avatar} alt="" />
      </div>
      <div className="autor_info">
        <div className="h4">Полина Кровякова</div>
        <div className="h5">Тим-лид в ЛидерТаск Бизнес</div>
      </div>
    </div>
  )
}

export default AutorCard
