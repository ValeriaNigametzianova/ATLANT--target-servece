import React, { useContext, useEffect } from 'react'
import '../css/main.css'
import '../css/header.css'
import UserIcon from '../icons/user.svg'
import PhoneIcon from '../icons/phone.svg'
import { HashLink } from 'react-router-hash-link'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const Header = observer(() => {
  const { app } = useContext(Context)

  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <HashLink to="/main">
            <div className="logo">ATLANT</div>
          </HashLink>
          <div className="menu">
            <div className="header_h6">
              <HashLink smooth to="/main#About us">
                О нас
              </HashLink>
            </div>
            <div className="header_h6">
              {app.location.pathname == '/main' ? (
                <HashLink smooth to="/main#About us">
                  Возможности
                </HashLink>
              ) : (
                <HashLink smooth to="/tools">
                  Возможности
                </HashLink>
              )}
            </div>
            <div className="header_h6">
              {app.location.pathname == '/main' ? (
                <HashLink smooth to="/main#Partnership">
                  Партнерство
                </HashLink>
              ) : (
                <HashLink smooth to="/partnership">
                  Партнерство
                </HashLink>
              )}
            </div>
            <div className="header_h6">
              <HashLink smooth to="/main#Tarifs">
                Тарифы
              </HashLink>
            </div>
            <div className="header_h6">
              {app.location.pathname == '/main' ? (
                <HashLink smooth to="/main#Blog">
                  Блог
                </HashLink>
              ) : (
                <HashLink smooth to="/blog">
                  Блог
                </HashLink>
              )}
            </div>
            <div className="header_h6">
              {app.location.pathname == '/main' ? (
                <HashLink smooth to="/main#Contacts">
                  Контакты
                </HashLink>
              ) : (
                <HashLink smooth to="/contacts">
                  Контакты
                </HashLink>
              )}
            </div>
          </div>
          <div className="actions">
            <object data={UserIcon} alt="lk" />
            <object data={PhoneIcon} alt="phone" />
          </div>
          <button className="button_outline" style={{ right: 0 }}>
            Попробовать бесплатно
          </button>
        </div>
      </div>
    </div>
  )
})

export default Header
