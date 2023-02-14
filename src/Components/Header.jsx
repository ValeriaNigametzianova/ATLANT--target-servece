import React from 'react'
import '../css/main.css'
import '../css/header.css'
import UserIcon from '../icons/user.svg'
import PhoneIcon from '../icons/phone.svg'

const Header = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <a href="./index.html">
            <div className="logo">ATLANT</div>
          </a>
          <ul className="menu">
            <li className="header_h6">О нас</li>
            <li className="header_h6">Возможности</li>
            <li className="header_h6">Партнерство</li>
            <li className="header_h6">Тарифы</li>
            <li className="header_h6">Блог</li>
            <li className="header_h6">Контакты</li>
          </ul>
          <div className="actions">
            <img src={UserIcon} alt="lk" />
            <img src={PhoneIcon} alt="phone" />
          </div>
          <button className="button_outline" style={{ right: 0 }}>
            Попробовать бесплатно
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
