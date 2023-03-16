import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/header.css'
import UserIcon from '../icons/user.svg'
import PhoneIcon from '../icons/phone.svg'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  useEffect(() => {
    console.log(window.location.pathname)
  }, [])
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          {/* {if (window.location.href === "")} */}
          <a href="./index">
            <div className="logo">ATLANT</div>
          </a>
          <div className="menu">
            <div className="header_h6">
              <HashLink smooth to="/main#About us">
                О нас
              </HashLink>
            </div>
            <div className="header_h6">
              <HashLink smooth to="/main#Opportunities">
                Возможности
              </HashLink>
            </div>
            <div className="header_h6">
              <HashLink smooth to="/main#Partnership">
                Партнерство
              </HashLink>
            </div>
            <div className="header_h6">
              <HashLink smooth to="/main#Tarifs">
                Тарифы
              </HashLink>
            </div>
            <div className="header_h6">
              <HashLink smooth to="/blog">
                Блог
              </HashLink>
            </div>
            <div className="header_h6">
              <HashLink smooth to="/main#Contacts">
                Контакты
              </HashLink>
            </div>
          </div>
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
