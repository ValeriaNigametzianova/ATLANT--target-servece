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
            <li className="header_h6">
              <a href="#About us">О нас</a>
            </li>
            <li className="header_h6">
              <a href="#Opportunities">Возможности</a>
            </li>
            <li className="header_h6">
              <a href="#Partnership">Партнерство</a>
            </li>
            <li className="header_h6">
              <a href="#Tarifs">Тарифы</a>
            </li>
            <li className="header_h6">
              <a href="#Blog">Блог</a>
            </li>
            <li className="header_h6">
              <a href="#Contacts">Контакты</a>
            </li>
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
