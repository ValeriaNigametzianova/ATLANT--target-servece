import React from 'react'
import CoverImg from '../image/post_cover.png'
import TimerIcon from '../icons/timer.svg'
import EyeIcon from '../icons/eye.svg'
import CalendarIcon from '../icons/calendar.svg'
import Dot from '../icons/dot_mark.svg'
import '../css/post.css'
import AutorCard from '../Components/AutorCard'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Post = () => {
  return (
    <div>
      <Header></Header>
      <div className="cover">
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
      </div>
      <div className="container">
        <div className="content">
          <div className="article_screen" style={{ alignItems: 'start' }}>
            <div className="article">
              <div className="h4 policy_h4">
                Вместе с «ЛидерТаск Бизнесом» разобрались, как создать сотрудникам комфортные условия работы
                и что делать, чтобы достигать поставленных целей в срок.
              </div>
              <div className="h3_inner" id="title1">
                1. Ставьте конкретные цели
              </div>

              <div className="h4 policy_h4">
                Оптимальное распределение задач, контроль их решения и последующая оценка эффективности персонала −
                обязательные действия, которые должен выполнять руководитель компании, причём независимо от её масштаба
                и рода деятельности. Надёжными помощниками в организации рабочего процесса могут стать современные
                разработки − программы-планировщики.
              </div>

              <div className="h4 policy_h4">
                Когда все сотрудники понимают, что должно получиться в итоге, команде проще расставлять приоритеты
                и качественно выполнять задачи. Цели — и краткосрочные, и долгосрочные — должны быть:
              </div>

              <div className="policy_paragraph">
                <div className="policy_sentence" id="title1_1">
                  <img src={Dot} alt="dot" />
                  <div className="h4 policy_h4">
                    Понятными для всех. О планах и перспективах компании должен знать не только совет директоров. Иначе
                    о доверии не может быть и речи. Для наглядности цели можно визуализировать, например делать
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

                <div className="h4 policy_h4">
                  После определения общей цели можно формулировать планы для сотрудников или отделов. И применять
                  к ним те же правила.
                </div>

                <div className="h3_inner" id="title2">
                  2. Распределяйте роли
                </div>
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
            </div>
            <div className="table_of_contents">
              <div className="h4">Содержание</div>
              <dl id="menu">
                <dt onmouseover="javascript:montre('smenu1');" className="h4">
                  <a href="#title1">Ставьте конкретные цели</a>
                </dt>

                <dd id="smenu1" ghmouseover="javascript:montre('smenu1');" onmouseout="javascript:montre();">
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

                <dt onmouseover="javascript:montre('smenu2');" onmouseout="javascript:montre();" className="h4">
                  <a href="#title2">Распределяйте роли</a>
                </dt>

                <dt onmouseover="javascript:montre('smenu3');" onmouseout="javascript:montre();" className="h4">
                  <a href="#title3">Планируйте</a>
                </dt>

                <dt onmouseover="javascript:montre('smenu4');" onmouseout="javascript:montre();" className="h4">
                  <a href="#title4">Следите за процессом</a>
                </dt>

                <dd
                  id="smenu4"
                  onmouseover="javascript:montre('smenu4');"
                  onmouseout="javascript:montre();"
                  className="h4"
                >
                  <ul>
                    <li>
                      <a href="">Инструменты развития</a>
                    </li>
                    <li>
                      <a href="">Постановка вопросов</a>
                    </li>
                  </ul>
                </dd>

                <dt onmouseover="javascript:montre('smenu4');" onmouseout="javascript:montre();" className="h4">
                  <a href="#title5">Хвалите за удачную работу</a>
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Post
