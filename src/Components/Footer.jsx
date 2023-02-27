import React from 'react'
import '../css/main.css'
import '../css/header.css'
import '../css/footer.css'
import { NavLink } from 'react-router-dom'
import FB from '../icons/social_FB.svg'
import IG from '../icons/social_IG.svg'
import VK from '../icons/social_VK.svg'

const Footer = () => {
  return (
    <div className="container">
      <div style={{ marginTop: '180px' }}>
        <div className="footer_line"></div>
        <div className="content">
          <div className="footer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <a href="./index.html">
                <div className="logo">ATLANT</div>
              </a>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div className="h5_mark">© 2022 ATLANT</div>
                <div className="h5_mark footer_menu_link">
                  <NavLink to="/policy">Политика конфиденциальности</NavLink>
                </div>
              </div>
            </div>
            <div className="second_column" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="footer_menu">
                <div className="footer_menu_column">
                  <div className="h5 footer_menu_link">
                    <a href="Main.jsx#About us">О нас</a>
                  </div>
                  <div className="h5 footer_menu_link">
                    <a href="Main.jsx#Opportunities">Возможности</a>
                  </div>
                  <div className="h5 footer_menu_link">
                    <a href="Main.jsx#Tarifs">Тарифы</a>
                  </div>
                </div>
                <div className="footer_menu_column">
                  <div className="h5 footer_menu_link">
                    <a href="Main.jsx#Partnership">Партнерство</a>
                  </div>
                  <div className="h5 footer_menu_link">
                    <a href="Main.jsx#Blog">Блог</a>
                  </div>
                  <div className="h5 footer_menu_link">
                    <a href="Main.jsx#Contacts">Контакты</a>
                  </div>
                </div>
              </div>
              <div className="footer_social_media">
                <img src={FB} alt="Facebook" style={{ width: '25px', height: '25px' }} />
                <img src={VK} alt="ВКонтакте" style={{ width: '25px', height: '25px' }} />
                <img src={IG} alt="Instagram" style={{ width: '25px', height: '25px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
