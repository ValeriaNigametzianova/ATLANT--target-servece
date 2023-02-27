import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Sphere from '../image/sphere.svg'
import '../css/tools.css'
import Logo_Ozon from '../image/logo_ozon.png'
import Logo_Strepsils from '../image/logo_strepsils.png'
import Logo_Redmond from '../image/logo_redmond.png'
import Logo_Nikon from '../image/logo_nikon.png'
import Logo_Helix from '../image/logo_helix.png'
import Logo_Reckitt from '../image/logo_reckitt.png'
import Lines2 from '../image/lines_2.svg'
import ArrowLink from '../icons/arrow_button_cards.svg'

const Tools = () => {
  return (
    <div>
      <a href="#top">
        <div className="button_to_top">
          <img src={ArrowLink} alt="to_top" style={{ rotate: '-45deg' }} />
        </div>
      </a>
      <Header></Header>
      <div className="container">
        <img src={Sphere} alt="Sphere" style={{ position: 'absolute', right: 0, top: '206px' }} />
        <div className="content">
          <div className="first_screen_inner">
            <div className="h1_inner">
              Lелаем интернет-
              <br />
              рекламу эффективнее
              <br /> и прибыльнее
            </div>
            <div className="h4 second_column">
              ATLANT - это более 100 показателей для оценки эффективности рекламы. Мы упрощаем запуск рекламных
              кампаний, аналитику и отчётность, чтобы вы уделяли внимание только самому важному. Нас выбрали несколько
              тысяч клиентов, которым мы успешно помогаем решать проблемы
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="screen">
              <div className="h2_inner">Инструменты сервиса</div>

              <div className="cards" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div className="card_top">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_top">UTM-разметчик</div>
                      <div className="card_number" style={{ padding: '0 74px 0 52px' }}>
                        01
                      </div>
                    </div>
                    <div className="card_description_top">
                      Добавление UTM-меток
                      <br />
                      в&nbsp;объявления и&nbsp;их обновление
                    </div>
                  </div>
                  <div className="card_top">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_top">ключи</div>
                      <div className="card_number" style={{ padding: '0 48px 0 191px' }}>
                        02
                      </div>
                    </div>
                    <div className="card_description_top">
                      Cоставление ключевых фраз
                      <br />с помощью списка ключей
                    </div>
                  </div>
                  <div className="card_top">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_top">Кросс-минусовка</div>
                      <div className="card_number" style={{ padding: '0 74px 0 94px' }}>
                        03
                      </div>
                    </div>
                    <div className="card_description_top">
                      Регулярное автоматическое исключение
                      <br />
                      минус-слов
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div className="card_bottom">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_bottom">Лид-форма</div>
                      <div className="card_number" style={{ padding: '0 40px 0 33px' }}>
                        04
                      </div>
                    </div>
                    <div className="card_description_bottom">
                      Импорт лидов
                      <br />
                      из&nbsp;соцсетей
                    </div>
                  </div>
                  <div className="card_bottom">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_bottom">Управление ставками</div>
                      <div className="card_number" style={{ padding: '0 60px 0 32px' }}>
                        05
                      </div>
                    </div>
                    <div className="card_description_bottom">
                      Преднастроенные стратегии
                      <br />
                      управления и&nbsp;каскады правил
                    </div>
                  </div>
                  <div className="card_bottom">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_bottom">Скорость</div>
                      <div className="card_number" style={{ padding: '0 94px 0 297px' }}>
                        06
                      </div>
                    </div>
                    <div className="card_description_bottom">
                      Расчёт выгодной ставки
                      <br />
                      всего за&nbsp;один клик
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div className="card_top">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_top">Мониторинг</div>
                      <div className="card_number" style={{ padding: '0 74px 0 121px' }}>
                        07
                      </div>
                    </div>
                    <div className="card_description_top">
                      Отслеживание ключевых
                      <br /> показателей эффективности
                      <br /> рекламы с помощью виджетов
                    </div>
                  </div>
                  <div className="card_top">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_top">
                        Финансовое
                        <br />
                        закрытие
                      </div>
                      <div className="card_number" style={{ padding: '0 48px 0 90px' }}>
                        08
                      </div>
                    </div>
                    <div className="card_description_top" style={{ paddingTop: '55px' }}>
                      Автоматическая сверка <br />
                      документов и выгрузка в 1С
                    </div>
                  </div>
                  <div className="card_top">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_top">Открытое REST API</div>
                      <div className="card_number" style={{ padding: '0 74px 0 115px' }}>
                        09
                      </div>
                    </div>
                    <div className="card_description_top">
                      Расширенные возможности сбора
                      <br /> и передачи данных с площадок в любые
                      <br /> системы
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div className="card_bottom">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_bottom">
                        Бид-
                        <br />
                        менеджер
                      </div>
                      <div className="card_number" style={{ padding: '0 40px 0 63px' }}>
                        10
                      </div>
                    </div>
                    <div className="card_description_bottom" style={{ paddingTop: '24px' }}>
                      Отправление <br />
                      ставок каждые
                      <br /> 15 минут
                    </div>
                  </div>
                  <div className="card_bottom">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_bottom">
                        Мультиканальная
                        <br />
                        аналитика
                      </div>
                      <div className="card_number" style={{ padding: '0 60px 0 125px' }}>
                        11
                      </div>
                    </div>
                    <div className="card_description_bottom" style={{ paddingTop: '24px' }}>
                      Возможность создать свою <br />
                      модель атрибуции на основе <br />
                      восьми имеющихся
                    </div>
                  </div>
                  <div className="card_bottom">
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      <div className="card_title_bottom">Лингвогенератор</div>
                      <div className="card_number" style={{ padding: '0 94px 0 175px' }}>
                        12
                      </div>
                    </div>
                    <div className="card_description_bottom" style={{ paddingTop: '69px' }}>
                      Автоматическое создание кампании
                      <br />
                      из YML-фида
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <img
            src={Lines2}
            alt="Lines"
            style={{ position: 'absolute', left: 0, top: '-80px', transform: 'scale(-1)', zIndex: '-1' }}
          />
          <div className="content">
            <div className="screen">
              <div className="bunner">
                <div className="bunner_first_line">
                  <div className="bunner_big_title">14 дней тестового периода</div>
                </div>
                <div className="bunner_second_line">
                  <div className="h4">
                    Оставьте заявку и получите возможность
                    <br /> бесплатно попробовать все инструменты, понять,
                    <br /> как выглядит система, а наши сотрудники помогут
                    <br /> вам освоиться
                  </div>
                  <div className="button_fill">Посмотреть демо</div>
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
                <img src={Logo_Ozon} alt="Logo_Ozon" className="a" />
                <img src={Logo_Redmond} alt="Logo_Redmond" className="b" />
                <img src={Logo_Reckitt} alt="Logo_Reckitt" className="c" />
                <img src={Logo_Helix} alt="Logo_Helix" className="d" />
                <img src={Logo_Nikon} alt="Logo_Helix" className="e" />
                <img src={Logo_Strepsils} alt="Logo_Strepsils" className="f" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Tools
