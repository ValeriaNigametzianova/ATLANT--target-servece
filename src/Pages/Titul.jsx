import React from 'react'
import { NavLink } from 'react-router-dom'

const Titul = () => {
  return (
    <div>
      <div class="container_title">
        <div class="content">
          <img class="h1" src="./mospolytech-logo-white.png" alt="LogoPolytech" height="100px" width="100px" />
          <div class="h1">ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ</div>
          <div class="h1">МОСКОВСКИЙ ПОЛИТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ</div>
        </div>

        <div class="content">
          <div class="h2">Факультет информационных технологий</div>
          <div class="h2">Кафедра Информатики и информационных технологий</div>
          <div class="h2">Направление подготовки 09.03.02 «Информационные системы и технологии»</div>
        </div>
        <div class="content">
          <div class="h3">Нигаметзянова Валерия Рустамовна 201-722</div>
          <NavLink to="/main">
            <div class="h4">Сайт ATLANT – сервис по автоматизации контекстной рекламы</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Titul
