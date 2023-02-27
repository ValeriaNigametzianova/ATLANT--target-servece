import React, { useEffect } from 'react'
import '../css/main.css'
import '../css/buttons.css'
import '../css/fonts.css'
import Header from '../Components/Header'
import planet_img from '../image/planet.png'
import ArrowLink from '../icons/arrow_button_cards.svg'
import ArrowPrewSlider from '../icons/slider_arrow_left.svg'
import ArrowNextSlider from '../icons/slider_arrow_right.svg'
import TarifCard from '../Components/TarifCard'
import Lines2 from '../image/lines_2.svg'
import Target from '../image/target.svg'
import IconVK from '../icons/social_VK.svg'
import IconFB from '../icons/social_FB.svg'
import IconIG from '../icons/social_IG.svg'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import News1 from '../image/news_1.png'
import News3 from '../image/news_3.png'
import News4 from '../image/news_4.png'
import PlanetMini from '../image/planet_mini.png'
import NewsCard from '../Components/NewsCard'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Main = () => {
  const advantagesStandart = [
    'доступ ко всем инструментам',
    'поддержка наших менеджеров',
    'оплата по месяцам или годовая',
  ]
  const advantagesExpanded = [
    'доступ ко всем инструментам',
    'поддержка наших менеджеров',
    'оплата по месяцам или годовая',
    'возможность оплаты в рассрочку',
  ]
  const advantagesFull = [
    'доступ ко всем инструментам',
    'поддержка наших менеджеров',
    'оплата по месяцам или годовая',
    'возможность оплаты в рассрочку',
    'персональные предложения и скидки',
  ]
  const News = [
    {
      image: News1,
      position: 'bottom',
      title: `Кейс Ozon: в 1,5 раза увеличили ROI`,
      time: '3 мин',
      date: '12.12.22',
    },
    {
      image: PlanetMini,
      position: 'top',
      title: 'Как настроить сводку под себя?',
      time: '5 мин',
      date: '22.07.22',
    },
    {
      image: News3,
      position: 'top',
      title: 'Правильное распределение задач\nв команде',
      time: '3 мин',
      date: '19.03.22',
    },
    {
      image: News4,
      position: 'bottom',
      title: 'Обновление: добавили инструмент!',
      time: '1,5 мин',
      date: '08.10.22',
    },
    {
      position: 'bottom',
      title: 'День сквозной аналитики',
      time: '1 мин',
      date: '15.03.23',
    },
  ]

  return (
    <div>
      <img src={planet_img} alt="shape_planet" style={{ position: 'absolute', left: 0 }} />
      <Header></Header>
      <a href="#top">
        <div className="button_to_top">
          <img src={ArrowLink} alt="to_top" style={{ rotate: '-45deg' }} />
        </div>
      </a>
      <div className="container">
        <div className="content">
          <div className="first_screen">
            <div className="h0" style={{ alignSelf: 'end' }}>
              Автоматизация
            </div>
            <div className="h0" style={{ alignSelf: 'start' }}>
              Контекстной
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <p className="h0" style={{ marginLeft: '139px', marginRight: '94px' }}>
                Рекламы
              </p>
              <div className="button_fill" style={{ bottom: '40px' }}>
                Посмотреть демо
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="second_screen" id={'About us'}>
            <div className="h1">
              превращаем
              <br />
              рекламу&nbsp;в&nbsp;прибыль
            </div>
            <div className="second_column">
              <div className="h4" style={{ marginTop: '83px' }}>
                Сэкономим время специалиста и&nbsp;дадим возможность перераспределить задачи максимально результативно.
                <br />
                Наш сервис поддерживает Яндекс.Директ, Google Рекламу и&nbsp;рекламные кампании в&nbsp;социальных сетях
                <span style={{ fontWeight: 600, color: '#ffffff' }}>Facebook</span>,<br />
                <span style={{ fontWeight: 600, color: '#ffffff' }}>
                  Instagram (Meta Platforms Inc. запрещено на&nbsp;территории России)
                </span>
                , «ВКонтакте», myTarget.
              </div>
              <div className="advantages">
                <div className="h3">
                  множество инструментов
                  <br />
                  для&nbsp;работы
                </div>
                <div className="h3">
                  удобный русскоязычный
                  <br />
                  интерфейс
                </div>
                <div className="h3">
                  отслеживание огромного
                  <br />
                  количества парметров и&nbsp;KPI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="screen" id={'Opportunities'}>
            <div className="h1">
              широкий спектр
              <br />
              <span className="text_gradient">возможностей</span> для работы
            </div>

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
                    <div className="card_number" style={{ padding: '0 40px 0 25px' }}>
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
                    <div className="card_number" style={{ padding: '0 60px 0 29px' }}>
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
                    <div className="card_number" style={{ padding: '0 40px 0 110px' }}>
                      06
                    </div>
                  </div>
                  <div className="card_description_bottom">
                    Расчёт выгодной ставки
                    <br />
                    всего за&nbsp;один клик
                  </div>
                </div>

                <HashLink to="/tools" style={{ display: 'flex' }}>
                  <div className="button_card">
                    <div>Ко всем</div>
                    <img src={ArrowLink} alt="arrow" style={{ width: '16px', height: '16px', marginLeft: '20px' }} />
                  </div>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="second_screen" id="Partnership">
            <div className="h1">
              предлагаем стать
              <br />
              сертифицированным
              <br />
              <span className="text_gradient">партнером</span>
            </div>
            <div className="second_column">
              <div className="h4" style={{ marginTop: '160px' }}>
                Организуем персональное обучение онлайн или у&nbsp;вас в&nbsp;офисе, обеспечим маркетинговую поддержку,
                порекомендуем сценарии управления рекламой, а&nbsp;вы первыми узнаете о&nbsp;новых продуктах, получите
                вознаграждение до&nbsp;15% на&nbsp;площадках за&nbsp;ведение клиентов и&nbsp;облегчите работу
                с&nbsp;рекламой.
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '40px' }}>
                <div className="link">Узнать подробности</div>
                <img src={ArrowLink} alt="arrow" style={{ width: '13px', height: '13px', marginLeft: '12px' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="slider" style={{ marginTop: '80px' }}>
          <div className="content">
            <div className="second_column slider_info">
              <div className="slider_title">Поддержка 24/7</div>
              <div className="h4" style={{ color: '#ffffff' }}>
                Наши специалисты готовы ответить на&nbsp;любые ваши вопросы в&nbsp;любое время дня и&nbsp;ночи, чтобы
                ваша работа была еще продуктивнее
              </div>
              <div style={{ display: 'flex', gap: '60px', marginTop: '54px' }}>
                <div className="arrow_left">
                  <img src={ArrowPrewSlider} alt="button_prew " />
                </div>
                <div className="arrow_right">
                  <img src={ArrowNextSlider} alt="button_next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={Lines2} alt="lines_img" className="lines_second" />
        <div className="content">
          <div className="screen" id="Tarifs">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div className="h1">Простые тарифы</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <img src={Target} alt="lines_img" />
                <img src={Target} alt="lines_img" style={{ rotate: '-90deg' }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <TarifCard title="Cтандартный" price="20 000" advantages={advantagesStandart}></TarifCard>
              <TarifCard title="Расширенный" price="50 000" advantages={advantagesExpanded}></TarifCard>
              <TarifCard title="Полный" price="100 000" advantages={advantagesFull}></TarifCard>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="screen" id="Blog">
            <div className="h1">
              интересные <span className="text_gradient">новости</span>
              <br />
              и&nbsp;полезности в&nbsp;нашем <span className="text_gradient">блоге</span>
            </div>
            <div className="news_wrapper">
              {News.map((el, index) => (
                <NewsCard
                  className={String.fromCharCode(97 + index)}
                  image={el?.image}
                  position={el?.position}
                  title={el?.title}
                  time={el?.time}
                  date={el?.date}
                ></NewsCard>
              ))}
              <div className="button_card f" style={{ paddingTop: '43px' }}>
                <div>В блог</div>
                <img src={ArrowLink} alt="arrow" style={{ width: '16px', height: '16px', marginLeft: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="second_screen" id="Contacts">
            <div>
              <div className="h2" style={{ color: '#ffffff', marginBottom: '80px' }}>
                Свяжитесь с нами:
              </div>
              <div className="contacts_info">
                <div className="contacts_info_item">
                  <div className="h4">Почта:</div>
                  <div className="h3_roboto">atlant@target.ru</div>
                </div>
                <div>
                  <div className="h4">Телефон:</div>
                  <div className="h3_roboto">8 800 80 80 80</div>
                </div>
                <div>
                  <div className="h4">Офис:</div>
                  <div className="h3_roboto">Москва, Пресненская набережная, 10с1 </div>
                </div>
              </div>
              <div className="contacts_socials">
                <img src={IconVK} alt="socialMediaVK" style={{ width: '45px' }} />
                <img src={IconFB} alt="socialMediaFB" style={{ width: '45px' }} />
                <img src={IconIG} alt="socialMediaIG" style={{ width: '47px' }} />
              </div>
            </div>

            <div className="second_column">
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main
