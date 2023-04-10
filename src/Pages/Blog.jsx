import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Header from '../Components/Header'
import BlogCover from '../image/cover-blog.png'
import '../css/blog.css'
import NewsBlog from '../Components/NewsBlog'
import News1 from '../image/house-with-rule.png'
import News2 from '../image/news_1.png'
import News3 from '../image/news_3.png'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const Cover = styled.div`
  width: 100%;
  height: 510px;
  position: relative;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 40px;
`

const Blog = observer(() => {
  const { app } = useContext(Context)
  const location = useLocation()
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

  let navigate = useNavigate()
  const routeChange = () => {
    let path = `/ATLANT-target-service/blog/post`
    navigate(path)
  }

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
      <Cover image={BlogCover}>
        <div className="container">
          <div className="content">
            <div className="screen_on_photo">
              <div className="h1_inner">Блог</div>
              <div className="h4" style={{ maxWidth: '32.13%' }}>
                Делимся с вами новостями ATLANT, крутыми фишками, удачными и не очень кейсами. Здесь также можно
                почитать истории наших клиентов и мнения экспертов рынка
              </div>
            </div>
          </div>
        </div>
      </Cover>
      <div className="container">
        <div className="content">
          <div style={{ marginTop: '120px', display: 'flex', justifyContent: 'space-between' }}>
            <div className="blog_filters">
              <div className="button_switch">Все</div>
              <div className="button_switch">Новости рынка</div>
              <div className="button_switch">Новости сервиса</div>
              <div className="button_switch">Туториалы</div>
              <div className="button_switch">Кейсы</div>
              <div className="button_switch">Советы</div>
            </div>
            <div className="blog_tools">
              <div style={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
                <input className="blog_search"></input>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search_icon"
                >
                  <g clip-path="url(#clip0_755_1712)">
                    <path
                      d="M13.97 15.031C12.491 16.269 10.586 17.016 8.509 17.016C3.812 17.016 0 13.204 0 8.508C0 3.812 3.812 0 8.509 0C13.204 0 17.017 3.812 17.017 8.508C17.017 10.586 16.27 12.492 15.032 13.969L19.781 18.719C19.927 18.865 20 19.057 20 19.25C20 19.837 19.463 20 19.25 20C19.058 20 18.866 19.927 18.719 19.78L13.97 15.031ZM8.509 1.501C4.641 1.501 1.502 4.641 1.502 8.508C1.502 12.375 4.641 15.515 8.509 15.515C12.375 15.515 15.516 12.375 15.516 8.508C15.516 4.641 12.375 1.501 8.509 1.501Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_755_1712">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="blog_sort">
                <select className="select-css">
                  <option value={''}>сначала новые</option>
                  <option value={''}>сначала старые</option>
                  <option value={''}>по популярности</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div className="blog_tape_row">
              {News.map((el, index) => (
                <NewsBlog
                  onClick={routeChange}
                  key={index}
                  label={el?.label}
                  image={el?.image}
                  title={el?.title}
                  description={el?.description}
                  time={el?.time}
                  date={el?.date}
                ></NewsBlog>
              ))}
            </div>
            <div className="blog_tape_row">
              {News.map((el, index) => (
                <NewsBlog
                  key={index}
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

          <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <div className="button_switch">Показать все</div>
            <div className="pagination">
              <div className="button_switch">1</div>
              <div className="button_switch">2</div>
              <div className="button_switch">3</div>
              <div className="button_switch">4</div>
              <div className="h6_header" style={{ color: '#01D1FF' }}>
                ...
              </div>
              <div className="button_switch">7</div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
})

export default Blog
