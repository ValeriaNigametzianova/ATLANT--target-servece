import React, { useContext, useEffect, useRef } from 'react'
import AutorCard from '../Components/AutorCard'
import Header from '../Components/Header'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import styled from 'styled-components'
import TimerIcon from '../icons/timer.svg'
import EyeIcon from '../icons/eye.svg'
import CalendarIcon from '../icons/calendar.svg'
import PostCover from '../image/post_cover.png'
import News1 from '../image/house-with-rule.png'
import News2 from '../image/news_1.png'
import News3 from '../image/news_3.png'
import '../css/post_newspaper.css'
import NewsBlog from '../Components/NewsBlog'
import Footer from '../Components/Footer'
import ButtonToTop from '../Components/ButtonToTop'

const Cover = styled.div`
  width: 100%;
  height: 510px;
  position: relative;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 60px;
`

const Post_Newspaper = observer(() => {
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
      <ButtonToTop></ButtonToTop>
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
              <div className="h2_inner" style={{ marginBottom: '0px', maxWidth: '666px' }}>
                Кейс Ozon: в 1,5 раза увеличили ROI
              </div>
            </div>
            <AutorCard
              name="Система &#10;Marilyn"
            ></AutorCard>
          </div>
        </div>
      </Cover>
      <div className="container">
        <div className="content">
          <div className="newspaper_stripe h4">
            <p>
              Наша компания производит экологичные продукты, которые делают чище дом, одежду, тело и мир вокруг.
              SYNERGETIC возник в 2011 году, когда доступной и экологической бытовой химии просто не существовало. Были
              либо дешёвые и не экологичные средства, либо экологичные, но импортные и дорогие. Мы стали первыми
              в России, кто сделал экологичные моющие средства доступными для всех. Как любой FMCG-бренд мы стремимся
              быть ближе к клиенту и реагируем на изменение покупательских привычек. После начала пандемии покупатели
              устремились на маркетплейсы, где есть возможность комфортно заказать и получить абсолютно любые товары.
              Согласно рейтингу крупнейших ритейлеров Infoline за первое полугодие 2021 года Wildberries вырос на 70,7%,
              а Ozon на 108,4% по сравнению с аналогичным полугодием 2020 года. Рост торговых площадок привлекает
              не только покупателей, но и продавцов. Конкуренция усиливается, и возникает необходимость в дополнительном
              продвижении своих товаров внутри площадки. Таким образом, маркетплейсы превращаются для брендов
              в рекламные сети. Рассмотрим этот феномен на примере Ozon.
              <br />
              <br />
              <span>Какие рекламные возможности есть у Ozon</span>
              <br /> Рекламная платформа Ozon (OZON Performance) даёт брендам возможность продвигать товары, показывая
              их в специальных блоках на сайте и в мобильном приложении. Рекламодателям доступно несколько форматов:
              баннеры; брендовая полка; реклама товаров. Первые два формата больше ориентированы на решение имиджевых
              задач, а «Реклама товаров» — на рост прямых продаж.
              <img src="https://www.cossa.ru/upload/medialibrary/411/SYNERGETIC_-_4_.jpg"></img>
              <br />
              <br />
              <span> Продвижение на Ozon</span> <br />
              За время использования Ozon Performance мы испробовали практически все возможности площадки. Но сегодня
              мы подробнее остановимся на «Рекламе товаров» в карточках товаров и категориях. SYNERGETIC представлен
              широким ассортиментом в различных категориях бытовой химии и средств личной гигиены. Для каждой товарной
              категории (средства для посуды, средства для стирки, мыло, зубные пасты, подгузники) мы создали отдельную
              кампанию и ежедневно отслеживали статистику. В каждой кампании по несколько артикулов товаров. Анализ
              показал, что товары одной категории имеют разную доходность, а значит есть смысл задавать им разные ставки
              и корректировать их в соответствии с ROI. Например, зубная паста со вкусом малины окупается лучше,
              чем со вкусом кокоса. Дело усложнялось тем, что пользователь мог увидеть, например, рекламу литрового геля
              для стирки детского белья, перейти по рекламе в карточку товара, а в ней увидеть, что есть точно такой
              же пятилитровый гель, но по более выгодной цене — и купить его. Получалось, что реклама одного товара
              привела к покупке другого. Кроме того, при анализе нужно учитывать, что цены на товары всё время менялись
              из-за акций. <img src="https://www.cossa.ru/upload/medialibrary/250/SYNERGETIC_-_3_.jpg"></img>Управлять
              вручную рекламой большего числа товаров при таких условиях трудно. Для этого требуется: выгрузить отчёты
              из рекламного кабинета и проанализировать товарные позиции; зайти в каждый товар и изменить ставки;
              повторить процедуру через несколько дней.
              <img src="https://www.cossa.ru/upload/medialibrary/d07/SYNERGETIC_-_1_.jpg"></img> К тому же у Ozon
              нет рекомендованных ставок, поэтому каждый товар приходилось «пристреливать», чтобы получить оптимальный
              ROI. На это уходило очень много времени, и возникла идея автоматизировать этот процесс.
              <br />
              <br /> <span>Автоматическое управление ставками с помощью Marilyn</span>
              <br /> Мы стали искать решение и вышли на Marilyn, поскольку в настоящий момент только у этой системы
              автоматизировано управление рекламой на Ozon. В частности, можно задавать правила, по которым система
              будет управлять ставками на товары. Поскольку к этому времени накопилась статистика по товарам
              и категориям, стало понятно, что каждая кампания «работает» по-разному, и общим правилом не обойтись —
              нужно создавать правила управления ставками для каждой кампании отдельно. Вот как это реализовали. <br />
              <br /> <span>Создали пользовательские метрики</span> <br />
              В отчётах OZON Performance данные по выручке разделены на «Выручку» и «Выручку с заказов модели».
              Например, если покупатель заходит по рекламе в карточку «Гель для стирки детского белья 5 л» и покупает
              именно этот товар, то в статистике OZON эта продажа отразится в «Выручке (с заказа)». А если покупатель
              заходит в карточку «Гель для стирки детского белья 5 л», но потом покупает гель меньшей ёмкости, например,
              1 литр, то эта продажа отразится в метрике «Выручка с заказов модели». Нам было важно объединить «Выручку»
              и «Выручку с заказов модели», чтобы рассчитать общий ROI и корректировать ставки на его основе. Формула,
              которую мы использовали: <div>Общий ROI = (Выручка + Выручка с заказов модели)/Стоимость </div>
              Но как создать такой «сборный» показатель, не рассчитывая его вручную? К счастью, из метрик, которые
              подтягиваются с рекламных площадок, в том числе с Ozon, в Marilyn можно сконструировать так называемые
              «пользовательские метрики». С их помощью можно, во-первых, управлять ставками, а во-вторых, сразу получать
              нужные показатели в отчётах без необходимости считать их дополнительно вручную.
              <img src="https://www.cossa.ru/upload/medialibrary/00c/SYNERGETIC_-_2_.png"></img>
            </p>
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

export default Post_Newspaper
