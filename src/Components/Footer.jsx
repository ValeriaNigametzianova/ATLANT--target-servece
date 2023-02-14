import React from 'react'
import '../css/main.css'
import '../css/header.css'
import '../css/footer.css'

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
                <div className="h5">© 2022 ATLANT</div>
                <div className="h5">Политика конфиденциальности</div>
              </div>
            </div>
            <div className="second_column">
              <div className="footer_menu">
                <div className="footer_menu_column">
                  <div className="h5">О нас</div>
                  <div className="h5">Возможности</div>
                  <div className="h5">Тарифы</div>
                </div>
                <div className="footer_menu_column">
                  <div className="h5">Партнерство</div>
                  <div className="h5">Блог</div>
                  <div className="h5">Контакты</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
