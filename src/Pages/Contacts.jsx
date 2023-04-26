import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../css/contacts.css'
import IconFB from '../icons/FB_icon.svg'
import IconIG from '../icons/IG_icon.svg'
import IconVK from '../icons/VK_icon.svg'
import IconTG from '../icons/TG_icon.svg'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import ButtonToTop from '../Components/ButtonToTop'

const Contacts = observer(() => {
  const { app } = useContext(Context)
  const location = useLocation()
  useEffect(() => {
    app.setLocation(location)
  }, [location])
  return (
    <div>
      <Header></Header>
      <ButtonToTop></ButtonToTop>
      <div className="container">
        <div className="content">
          <div className="first_screen_inner">
            <div className="h1_inner">Контакты</div>
          </div>
          <div className="contacts" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="contacts_wrap">
              <div className="contacts_item">
                <div className="h4">Пишите:</div>
                <div className="h2_inner" style={{ marginBottom: 0 }}>
                  atlant@target.ru
                </div>
              </div>
              <div className="contacts_item">
                <div className="h4">Звоните:</div>
                <div className="h2_inner" style={{ marginBottom: 0 }}>
                  8 800 45 21 12
                </div>
              </div>
              <div className="contacts_item">
                <div className="h4">Приезжайте:</div>
                <div className="h2_inner " style={{ marginBottom: 0 }}>
                  Москва, Пресненская набережная, 10с1
                </div>
              </div>
              <div className="contacts_item">
                <div className="h4">Мы в социальных сетях:</div>
                <div className="cocials">
                  {/* Facebook icon */}
                  <object type="image/svg+xml" data={IconFB} alt="Facebook icon" />

                  {/* VK icon */}
                  <object type="image/svg+xml" data={IconVK} alt="VK icon" />

                  {/* Instagram icon */}
                  <object type="image/svg+xml" data={IconIG} alt="Instagram icon" />

                  {/* Telegram icon */}

                  <object type="image/svg+xml" data={IconTG} alt="Telegram icon" />
                </div>
              </div>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A81fa95f0b3815dfbf6c665deb05ba1212970e4deeb69d057a216637fb6f3c872&amp;source=constructor"
              width="58%"
              height="600"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
})

export default Contacts
