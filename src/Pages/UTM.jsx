import React, { useContext, useEffect, useState } from 'react'
import '../css/main.css'
import '../css/buttons.css'
import '../css/fonts.css'
import '../css/utm.css'
import Header from '../Components/Header'
import BGCode from '../image/background-code.svg'
import Laptop from '../image/laptop.png'
import News1 from '../image/news_1.png'
import News3 from '../image/news_3.png'
import PlanetMini from '../image/planet_mini.png'
import NewsCard from '../Components/NewsCard'
import Lines from '../image/lines-utm.svg'
import Logo_Ozon from '../image/logo_ozon.png'
import Logo_Strepsils from '../image/logo_strepsils.png'
import Logo_Redmond from '../image/logo_redmond.png'
import Logo_Nikon from '../image/logo_nikon.png'
import Logo_Helix from '../image/logo_helix.png'
import Logo_Reckitt from '../image/logo_reckitt.png'
import { HashLink } from 'react-router-hash-link'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import ButtonToTop from '../Components/ButtonToTop'

const UTM = observer(() => {
  const [youtubeID] = useState('eHjIY44K_n4')
  const { app } = useContext(Context)
  const location = useLocation()

  const News = [
    {
      image: News1,
      position: 'top',
      title: `Кейс Ozon: в 1,5 раза увеличили ROI`,
      time: '3 мин',
      date: '12.12.22',
    },
    {
      image: PlanetMini,
      position: 'top',
      title: 'Поясняем работу UTM на примере риалвеб',
      time: '5 мин',
      date: '22.07.22',
    },
    {
      image: News3,
      position: 'top',
      title: 'Альфа банк: статистика\nпод контролем',
      time: '3 мин',
      date: '19.03.22',
    },
  ]

  useEffect(() => {
    app.setLocation(location)
  }, [location])
  return (
    <div>
      <img src={BGCode} alt="shape_planet" style={{ position: 'absolute', right: '0', zIndex: '-10' }} />
      <Header></Header>
      <ButtonToTop></ButtonToTop>
      <div className="container">
        <div className="content">
          <div className="first_screen_inner">
            <div className="h1_inner">
              Автоматически создавайте <br />
              UTM-разметку
              <br />
              для рекламных кампаний
            </div>
            <div className="h4 second_column">
              Укажите общие UTM-метки и динамические параметры для всей кампании и следите за результатами размещения
              объявлений. Метки и параметры автоматически добавятся к каждой ссылке всех объявлений.
            </div>
            <div className="button_fill" style={{ marginTop: '60px' }}>
              Записаться на тест
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="screen">
            <div className="list_grid">
              <div className="list_grid_point">
                <div className="list_grid_point_number">01</div>
                <div className="list_grid_title">
                  Шаблоны <br />
                  UTM-разметки
                </div>
                <div className="h4">
                  При использовании дефолтных шаблонов для рекламных каналов не нужна дополнительная настройка
                </div>
              </div>
              <div className="list_grid_point">
                <div className="list_grid_point_number">02</div>
                <div className="list_grid_title">
                  Массовая <br />
                  замена меток
                </div>
                <div className="h4">Возможность отредактировать множество меток за один клик</div>
              </div>
              <div className="list_grid_point">
                <div className="list_grid_point_number">03</div>
                <div className="list_grid_title">
                  Получение
                  <br />
                  веб-аналитики
                </div>
                <div className="h4">
                  Можно настроить правила мэтчинга данных из систем аналитики с рекламными кампаниями <br />
                  для каждого параметра.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="screen">
            <div className="h2_inner">
              Как Работает автоматический
              <br /> utm-разметчик?
            </div>
            <div className="double_screen">
              <iframe
                className="video"
                title="Youtube player"
                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                allowFullScreen
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0&showinfo=0`}
              ></iframe>
              <div className="second_column">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="h4">
                    Сервис добавляет и обновляет нужную разметку ссылок в объявлениях, чтобы в Analytics поступали
                    корректные данные из Яндекс Директа и в Метрику — из Google Ads
                  </div>
                  <div className="h4">
                    Автоматическая UTM-разметка объявлений доступна для рекламных каналов: Яндекс.Директ, Google Ads,
                    myTarget, ВКонтакте, YouTube, Яндекс.Маркет и др.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="screen">
            <div className="h2_inner">
              посмотрите, как Utm-разметчик <br />
              помог другим кoмпаниям
            </div>
            <div className="news_wrapper_inner">
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
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="screen">
            <div className="h2_inner">Как выглядит настройка?</div>
            <div className="double_screen">
              <img src={Laptop} alt="Laptop ATLANT Interface" />
              <div className="second_column">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <div className="h3_roboto">Пример разметки для Яндекс.Директа</div>
                  <div className="h4" style={{ overflowWrap: 'break-word' }}>
                    utm_content=ch_yandex_direct|cid_&#123;campaign_id&#125;|gid_&#123;gbid&#125;|ad_&#123;ad_id&#125;|ph_&#123;phrase_id&#125;&#124;crt_&#123;creative_id&#125;|pst_&#123;position_type&#125;|ps_&#123;position&#125;|srct_&#123;source_type&#125;|src_&#123;source&#125;|devt_&#123;device_type&#125;|ret_&#123;retargeting_id&#125;|geo_&#123;region_id&#125;|cf_&#123;coef_goal_context_id&#125;|int_&#123;interest_id&#125;|tgt_&#123;adtarget_id&#125;add_&#123;addphrases&#125;|mrlid_%project_name_ATLANT%|dop_%the_name_of_the_additional_link_is_translated%utm_term=&#123;keyword&#125;
                  </div>
                </div>
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
              <div className="promotion_title">Ваши данные не потеряются!</div>
              <div className="h4">
                Наличие корректной UTM-разметки позволяет не терять ценные данные. Мы видим, что в момент подключения
                к сервису около 70% кампаний имеют неполную разметку. Чтобы исключить ошибки, мы создали бота, который
                автоматически проверяет наличие UTM-меток и проводит разметку в случае их отсутствия
              </div>
              <div className="button_fill" style={{ marginTop: '60px' }}>
                Попробовать бесплатно
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
      <div className="container">
        <div className="content">
          <div className="screen">
            <div className="h2_inner">
              Изучите другие инструменты <span className="text_gradient">ATLANT</span>
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '16px', height: '16px', marginLeft: '20px' }}
                  >
                    <path d="M1 17L17 1M17 1H7M17 1V11" stroke="#AEFF01" stroke-width="2" />
                  </svg>
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
})

export default UTM
