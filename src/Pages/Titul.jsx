import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo_Polytech from '../image/mospolytech-logo-white.png'
import '../css/title.css'

const Titul = () => {
  return (
    <div>
      <div class="container_title">
        <div class="content_title">
          <img src={Logo_Polytech} alt="LogoPolytech" height="100px" width="100px" />
          <div className="content_title">
            <div class="h3_title">
              ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
            </div>
            <div class="h3_title">МОСКОВСКИЙ ПОЛИТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ</div>
          </div>
        </div>

        <div class="content_title">
          <div class="h3_title">Факультет информационных технологий</div>
          <div class="h3_title">Кафедра Информатики и информационных технологий</div>
          <div class="h3_title">Направление подготовки 09.03.02 «Информационные системы и технологии»</div>
        </div>
        <div class="content_title">
          <div class="h2_title">Нигаметзянова Валерия Рустамовна 201-722</div>
          <NavLink to="/main">
            <div class="h4_title">Сайт ATLANT – сервис по автоматизации контекстной рекламы</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Titul
