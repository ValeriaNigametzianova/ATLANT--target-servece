import React, { useContext, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import styled from 'styled-components'
import TimerIcon from '../icons/timer.svg'
import EyeIcon from '../icons/eye.svg'
import CalendarIcon from '../icons/calendar.svg'
import Dot from '../icons/dot_mark.svg'
import '../css/post.css'
import AutorCard from '../Components/AutorCard'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Player from '../Components/Player'
import PostCover from '../image/post_cover.png'
import News1 from '../image/house-with-rule.png'
import News2 from '../image/news_1.png'
import News3 from '../image/news_3.png'
import NewsBlog from '../Components/NewsBlog'
import Post_image1 from '../image/post_image1.jpg'

const Cover = styled.div`
  width: 100%;
  height: 510px;
  position: relative;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 60px;
`

const Post = observer(() => {
  const { app } = useContext(Context)
  const location = useLocation()
  const Photo_1 = useRef(null)
  const News = [
    {
      image: News1,
      label: 'Новости сервиса',
      title: `Обновление: добавили новый инструмент!`,
      description: `Появилась возможность отслеживать источники звонков на АМР-страницах. Ранее это было невозможно из-за ограничений\nдля этого типа страниц`,
      time: '5 мин',
      date: '08.10.22',
    },
    {
      image: News3,
      label: 'Советы',
      title: 'Правильное распределение задач в команде',
      description: `Рассказываем, как увеличить продуктивность каждого члена команды, при этом сохранить благополучный эмоциональный фон сотрудников`,
      time: '5 мин',
      date: '22.07.22',
    },
    {
      image: News2,
      label: 'Кейсы',
      title: 'Кейс Ozon: в 1,5 раза увеличили ROI',
      description: `Увеличили количество транзакций и возврат инвестиций в рекламу`,
      time: '3 мин',
      date: '19.03.22',
    },
  ]

  useEffect(() => {
    app.setLocation(location)
  }, [location])
  return (
    <div>
      <Header></Header>
      <a href="#top">
        <div className="button_to_top" style={{ rotate: '-45deg' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 17L17 1M17 1H7M17 1V11" stroke="#AEFF01" stroke-width="2" />
          </svg>
        </div>
      </a>
      <Cover image={PostCover}>
        <div className="cover_place">
          <div className="cover_content">
            <div className="cover_title">
              <div className="cover_title_info">
                <div className="teg">Советы</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginLeft: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src={TimerIcon} alt="" style={{ width: '20px' }} />
                    <div className="h5">3 мин</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src={EyeIcon} alt="" style={{ width: '22px' }} />
                    <div className="h5">124</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src={CalendarIcon} alt="" style={{ width: '20px' }} />
                    <div className="h5">19 марта 2022</div>
                  </div>
                </div>
              </div>
              <div className="h2_inner" style={{ marginBottom: '0px' }}>
                Правильное распределение
                <br />
                задач в команде
              </div>
            </div>
            <AutorCard></AutorCard>
          </div>
        </div>
      </Cover>
      <div className="container">
        <div className="content">
          <div className="article_screen" style={{ alignItems: 'start' }}>
            <div className="article">
              <div className="post_paragraph">
                <div className="h4 policy_h4">
                  Вместе с «ЛидерТаск Бизнесом» разобрались, как создать сотрудникам комфортные условия работы
                  и что делать, чтобы достигать поставленных целей в срок.
                </div>
                <div className="h4 policy_h4">Cпециально для нас Полина записала подкаст! Слушайте ниже:</div>
              </div>
              <Player></Player>
              <div className="h3_inner" id="title1">
                1. Ставьте конкретные цели
              </div>
              <div className="post_paragraph">
                <div className="h4 policy_h4">
                  Оптимальное распределение задач, контроль их решения и последующая оценка эффективности персонала −
                  обязательные действия, которые должен выполнять руководитель компании, причём независимо
                  от её масштаба и рода деятельности. Надёжными помощниками в организации рабочего процесса могут стать
                  современные разработки − программы-планировщики.
                </div>

                <div className="h4 policy_h4">
                  Когда все сотрудники понимают, что должно получиться в итоге, команде проще расставлять приоритеты
                  и качественно выполнять задачи. Цели — и краткосрочные, и долгосрочные — должны быть:
                </div>

                <div className="policy_paragraph">
                  <div className="policy_sentence" id="title1_1">
                    <img src={Dot} alt="dot" />
                    <div className="h4 policy_h4">
                      Понятными для всех. О планах и перспективах компании должен знать не только совет директоров.
                      Иначе о доверии не может быть и речи. Для наглядности цели можно визуализировать, например делать
                      наброски, графики или презентации.
                    </div>
                  </div>

                  <div className="policy_sentence" id="title1_2">
                    <img src={Dot} alt="dot" />
                    <div className="h4 policy_h4">
                      Измеряемыми. Не «открыть новые магазины», а «открыть три магазина до конца года». Так легче
                      разделить задачи между членами команды и расставить дедлайны.
                    </div>
                  </div>

                  <div className="policy_sentence" id="title1_3">
                    <img src={Dot} alt="dot" />
                    <div className="h4 policy_h4">
                      Выполнимыми. Амбициозные планы — это хорошо, но нужно объективно оценивать возможности коллектива
                      и ставить цели, которые ему под силу. В противном случае есть риск либо напугать сотрудников,
                      либо со временем лишить их мотивации — если они регулярно будут завершать задачи на 30–40%, вера
                      в себя у них пропадёт.
                    </div>
                  </div>
                </div>
                <div className="h4 policy_h4">
                  После определения общей цели можно формулировать планы для сотрудников или отделов. И применять
                  к ним те же правила.
                </div>
              </div>
              <div className="h3_inner" id="title2">
                2. Распределяйте роли
              </div>
              <div className="post_paragraph">
                <div className="h4 policy_h4">
                  У каждого члена команды должны быть чёткие задачи и обязанности. Иначе может возникнуть ситуация,
                  когда несколько человек будут заниматься одним делом одновременно, не зная об этом, а про какое‑то
                  важное поручение все забудут. Можно сделать для каждого сотрудника (если речь о маленьком коллективе)
                  или отдела (для крупных компаний) небольшую памятку с распределением ролей внутри команды.
                  Тогда каждый будет знать, к кому обращаться, если понадобится дополнительная информация или помощь.
                </div>
                <div className="h4 policy_h4">
                  А для эффективного распределения задач руководителю компании или отдела важно хорошо знать каждого
                  сотрудника, его сильные и слабые стороны. Это позволит повысить продуктивность и отдельного работника,
                  и всей команды.
                </div>
              </div>
              <div>
                <div id="post_photo_placeholder" className="post_photo_placeholder">
                  <img id="photo_1" src={Post_image1} alt="planing_photo" />
                </div>
                <div
                  id="post_photo"
                  className="post_photo"
                  onClick={() => {
                    if (document.getElementById('photo_1').getAttribute('class') !== 'zoom_image') {
                      document.getElementById('photo_1').setAttribute('class', 'zoom_image')
                      document.getElementById('post_photo').setAttribute('class', 'post_photo_zoom')
                      document
                        .getElementById('post_photo_placeholder')
                        .setAttribute('class', 'post_photo_placeholder_zoom')
                    } else {
                      document.getElementById('photo_1').setAttribute('class', '')
                      document.getElementById('post_photo').setAttribute('class', 'post_photo')
                      document.getElementById('post_photo_placeholder').setAttribute('class', 'post_photo_placeholder')
                    }
                  }}
                >
                  <div className="post_photo_cover">
                    <img
                      id="photo_1"
                      ref={Photo_1}
                      src={Post_image1}
                      alt="planing_photo"
                      onMouseDown={(e) => e.stopPropagation()}
                      style={{ cursor: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="table_of_contents">
              <div className="h4">Содержание</div>
              <dl id="menu">
                <dt className="h4">
                  <a href="#title1">Ставьте конкретные цели</a>
                </dt>

                <dd id="smenu1" onmouseout="javascript:montre();">
                  <ul className="h4">
                    <li>
                      <a href="#title1_1">Понятность</a>
                    </li>
                    <li>
                      <a href="#title1_2">Измеряемость</a>
                    </li>
                    <li>
                      <a href="#title1_3">Выполняемость</a>
                    </li>
                  </ul>
                </dd>

                <dt className="h4">
                  <a href="#title2">Распределяйте роли</a>
                </dt>

                <dt className="h4">
                  <a href="#title3">Планируйте</a>
                </dt>

                <dt className="h4">
                  <a href="#title4">Следите за процессом</a>
                </dt>

                <dd id="smenu4" className="h4">
                  <ul>
                    <li>
                      <a href="">Инструменты развития</a>
                    </li>
                    <li>
                      <a href="">Постановка вопросов</a>
                    </li>
                  </ul>
                </dd>

                <dt className="h4">
                  <a href="#title5">Хвалите за удачную работу</a>
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="screen">
            <div className="h2_inner">Советуем также почитать</div>
            <div className="blog_tape_row">
              {News.map((el, index) => (
                <NewsBlog
                  key={index}
                  //   className={String.fromCharCode(97 + index)}
                  label={el?.label}
                  image={el?.image}
                  title={el?.title}
                  description={el?.description}
                  time={el?.time}
                  date={el?.date}
                ></NewsBlog>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
})

export default Post
