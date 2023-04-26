import React from 'react'
import '../css/main.css'
import '../css/header.css'
import '../css/footer.css'
import IconFB from '../icons/FB_icon.svg'
import IconIG from '../icons/IG_icon.svg'
import IconVK from '../icons/VK_icon.svg'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className="container">
      <div style={{ marginTop: '180px' }}>
        <div className="footer_line"></div>
        <div className="content">
          <div className="footer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <HashLink to="/main">
                <div className="logo">ATLANT</div>
              </HashLink>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div className="h5_mark">© 2022 ATLANT</div>
                <div className="h5_mark footer_menu_link">
                  <HashLink to="/policy">Политика конфиденциальности</HashLink>
                </div>
              </div>
            </div>
            <div className="second_column" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="footer_menu">
                <div className="footer_menu_column">
                  <div className="h5 footer_menu_link">
                    <HashLink to="/main#About us">О нас</HashLink>
                  </div>
                  <div className="h5 footer_menu_link">
                    <HashLink to="/tools">Возможности</HashLink>
                  </div>
                  <div className="h5 footer_menu_link">
                    <HashLink to="/main#Tarifs">Тарифы</HashLink>
                  </div>
                </div>
                <div className="footer_menu_column">
                  <div className="h5 footer_menu_link">
                    <HashLink to="/partnership">Партнерство</HashLink>
                  </div>
                  <div className="h5 footer_menu_link">
                    <HashLink to="/blog">Блог</HashLink>
                  </div>
                  <div className="h5 footer_menu_link">
                    <HashLink to="/contacts">Контакты</HashLink>
                  </div>
                </div>
              </div>
              <div className="footer_social_media">
                <object data={IconFB} alt="Facebook" style={{ width: '25px', height: '25px' }} />
                <object data={IconVK} alt="ВКонтакте" style={{ width: '25px', height: '25px' }} />
                <object data={IconIG} alt="Instagram" style={{ width: '25px', height: '25px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
