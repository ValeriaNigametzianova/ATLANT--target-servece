import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import BlogCover from '../image/cover-blog.png'
import '../css/partnership.css'
import { useNavigate } from 'react-router-dom'
import Sphere from '../image/sphere_little.svg'
import Lines from '../image/lines-utm.svg'
import Logo_profitator from '../image/Logo_profitator.png'
import Logo_kit from '../image/Logo_kit.png'
import Logo_alfa from '../image/Logo_alfa.png'
import Logo_blondinka from '../image/Logo_blondinka.png'
import Logo_arrowMedia from '../image/Logo_arrowMedia.png'
import Logo_digitalGuru from '../image/Logo_digitalGuru.png'
import ArrowLink from '../icons/arrow_button_cards.svg'
import Lines1 from '../image/lines_1_parthership.svg'
import MaskLines1 from '../image/mask for lines in center.svg'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import ButtonToTop from '../Components/ButtonToTop'

const Cover = styled.div`
  width: 100%;
  height: 598px;
  position: relative;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 40px;
`

const Partnership = observer(() => {
  let navigate = useNavigate()
  const routeChange = () => {
    let path = `/ATLANT-target-service/blog/post`
    navigate(path)
  }
  const { app } = useContext(Context)
  const location = useLocation()
  useEffect(() => {
    app.setLocation(location)
  }, [location])
  return (
    <div>
      <Header></Header>
      <ButtonToTop></ButtonToTop>
      <Cover image={BlogCover}>
        <div className="container">
          <div className="content">
            <div className="screen_on_photo">
              <div className="h1_inner">
                Партнерская <br /> программа
              </div>
              <div className="h4 second_column">
                Статус сертифицированного партнёра для агентов и фрилансеров позволяет показать вашим клиентам и рынку,
                что вы управляете интернет-рекламой на продвинутом уровне
              </div>
              <div className="button_fill" style={{ marginTop: '60px' }}>
                Записаться на тест
              </div>
            </div>
          </div>
        </div>
      </Cover>

      <div className="container">
        <img src={Sphere} alt="Sphere" style={{ position: 'absolute', right: '90px', top: '453px' }} />
        <div className="content">
          <div className="screen">
            <div className="list_grid">
              <div className="a">
                <div className="list_grid_point_number">01</div>
                <div className="list_grid_title">Поиск точек роста ваших клиентов</div>
                <div className="h4">
                  Посоветуем сценарии управления рекламой для ваших клиентов, а также поможем настроить автоматизацию
                </div>
              </div>
              <div className="b">
                <div className="list_grid_point_number">02</div>
                <div className="list_grid_title" style={{ width: '120%' }}>
                  Повышение
                  <br />
                  квалификации сотрудников
                </div>
                <div className="h4">
                  Проводим регулярные обучения, рассказываем, как работать с сервисом и использовать весь функционал
                  максимально эффективно
                </div>
              </div>
              <div className="c">
                <div className="list_grid_point_number">03</div>
                <div className="list_grid_title">Маркетинговая поддержка</div>
                <div className="h4">
                  Вместе развиваем рынок интернет-рекламы, организуем мероприятия, публикуем совместные кейсы и статьи
                </div>
              </div>
              <div className="d">
                <div className="list_grid_point_number">04</div>
                <div className="list_grid_title">
                  Ранний доступ
                  <br />
                  к новым технологиям
                </div>
                <div className="h4">
                  Вы первыми получаете доступк новым продуктам и участвуете в закрытых beta-тестированиях
                </div>
              </div>
              <div className="e">
                <div className="list_grid_point_number">05</div>
                <div className="list_grid_title">Экономия временных ресурсов</div>
                <div className="h4">
                  Если не успеваете выполнить какую-то задачу для клиента, можете заказать её у наших специалистов
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="screen">
            <div className="h2_inner">Сколько можно заработать?</div>
            <div className="table">
              <div className="table_head">
                <div className="table_col1">Суммарный оборот клиентов, руб/мес (без НДС)</div>
                <div className="table_col">Яндекс Директ</div>
                <div className="table_col">Авито</div>
                <div className="table_col">ВКонтакте</div>
                <div className="table_col">ПромоСтраницы</div>
              </div>
              <div className="table_row">
                <div className="table_col1">от 30 000 до 99 999</div>
                <div className="table_col">до 6%</div>
                <div className="table_col">5%</div>
                <div className="table_col">5%</div>
                <div className="table_col">6%</div>
              </div>
              <div className="table_row">
                <div className="table_col1">от 100 000 до 499 999</div>
                <div className="table_col">до 6,5%</div>
                <div className="table_col">6%</div>
                <div className="table_col">6%</div>
                <div className="table_col">7%</div>
              </div>
              <div className="table_row">
                <div className="table_col1">от 500 000 до 999 999</div>
                <div className="table_col">до 6,5%</div>
                <div className="table_col">7%</div>
                <div className="table_col">7%</div>
                <div className="table_col">8%</div>
              </div>
              <div className="table_row">
                <div className="table_col1">от 1 000 000 до 2 999 999</div>
                <div className="table_col">до 7,5%</div>
                <div className="table_col">до 7,5%</div>
                <div className="table_col">8%</div>
                <div className="table_col">9%</div>
              </div>
              <div className="table_row">
                <div className="table_col1">от 3 000 000</div>
                <div className="table_col">до 8%</div>
                <div className="table_col">8%</div>
                <div className="table_col">9%</div>
                <div className="table_col">10%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={Lines} alt="lines" style={{ position: 'absolute', left: 0, top: '-250px', zIndex: '-1' }} />
        <div className="content">
          <div className="screen" style={{ position: 'relative', display: 'flex', justifyContent: 'end' }}>
            <div className="second_column">
              <div className="promotion_title">Дополнительная премия</div>
              <div className="h3_roboto">
                Получите <span style={{ color: '#01d1ff' }}>+5%</span> к агентскому
                <br />
                вознаграждению за счёт доли <br />
                таргетированной рекламы при обороте
                <br /> от 3 000 000 ₽
              </div>
              <div className="button_fill" style={{ marginTop: '60px' }}>
                Подать заявку
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="screen">
            <div className="h2_inner">Клиенты нам доверяют</div>
            <div className="companies_wrapper">
              <img src={Logo_profitator} alt="Logo_Ozon" className="a" />
              <img src={Logo_kit} alt="Logo_Redmond" className="b" />
              <img src={Logo_alfa} alt="Logo_Reckitt" className="c" />
              <img src={Logo_blondinka} alt="Logo_Helix" className="d" />
              <img src={Logo_arrowMedia} alt="Logo_Helix" className="e" />
              <img src={Logo_digitalGuru} alt="Logo_Strepsils" className="f" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={Lines1} alt="shape_planet" style={{ position: 'absolute', left: 0, top: '-420px' }} />
        <img src={MaskLines1} alt="shape_planet" style={{ position: 'absolute', left: 0, top: '248px' }} />

        <div className="content">
          <div className="second_screen" id="Contacts">
            <div>
              <div className="h2" style={{ color: '#ffffff', marginBottom: '80px' }}>
                Остались вопросы?
              </div>
              <div className="h4 second_column">
                Оставьте заявку на участие в программе, и наш менеджер расскажет все подробности и ответит на ваши
                вопросы. Также вы можете скачать полную презентацию партнёрской программы в pdf
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '40px' }}>
                <div className="link">Полная презентация программы</div>
                <img src={ArrowLink} alt="arrow" style={{ width: '13px', height: '13px', marginLeft: '12px' }} />
              </div>
            </div>

            <div className="second_column">
              <Form partnership></Form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
})

export default Partnership
