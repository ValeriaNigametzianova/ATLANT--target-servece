import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../css/policy.css'
import Dot from '../icons/dot_mark.svg'

const Policy = observer(() => {
  const { app } = useContext(Context)
  const location = useLocation()
  useEffect(() => {
    app.setLocation(location)
  }, [location])
  return (
    <div>
      <a href="#top">
        <div className="button_to_top" style={{ rotate: '-45deg' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 17L17 1M17 1H7M17 1V11" stroke="#AEFF01" stroke-width="2" />
          </svg>
        </div>
      </a>
      <Header></Header>
      <div className="container">
        <div className="policy_content">
          <div className="first_screen_inner">
            <div className="h1_inner">Политика в отношении обработки персональных данных</div>
            <div className="policy_sentence">
              <div className="policy_h2">1.</div>
              <div className="policy_h2">Общие положения и основные термины</div>
            </div>
            <div className="policy_paragraph">
              <div className="h4 policy_h4">
                Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального
                закона от 27.07.2006. № 152-ФЗ «О персональных данных» (далее — Закон о персональных данных)
                и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных
                данных, предпринимаемые ATLANT (далее — Оператор).
              </div>
              <div className="h4 policy_h4">
                Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется
                ко всей информации, которую Оператор может получить о посетителях веб-сайта https://atlant.ru.
              </div>
            </div>
            <div className="policy_sentence">
              <div className="policy_h2">2.</div>
              <div className="policy_h2">Основные понятия, используемые в Политике</div>
            </div>
            <div className="policy_paragraph">
              <div className="policy_sentence">
                <div className="h4 policy_h4">2.1.</div>
                <div className="h4 policy_h4">
                  Информационная система персональных данных — совокупность содержащихся в базах данных персональных
                  данных, и обеспечивающих их обработку информационных технологий и технических средств.
                </div>
              </div>
              <div className="policy_sentence">
                <div className="h4 policy_h4">2.2</div>
                <div className="h4 policy_h4">
                  Веб-сайт — совокупность графических и информационных материалов, а также программ
                  для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу
                  https://atlant.ru.
                </div>
              </div>
              <div className="policy_sentence">
                <div className="h4 policy_h4">2.3</div>
                <div className="h4 policy_h4">
                  Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением
                  случаев, если обработка необходима для уточнения персональных данных).
                </div>
              </div>
              <div className="policy_sentence">
                <div className="h4 policy_h4">2.4</div>
                <div className="h4 policy_h4">
                  Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств
                  вычислительной техники.
                </div>
              </div>
              <div className="policy_sentence">
                <div className="h4 policy_h4">2.5</div>
                <div className="h4 policy_h4">
                  Обезличивание персональных данных — действия, в результате которых невозможно определить
                  без использования дополнительной информации принадлежность персональных данных конкретному
                  Пользователю или иному субъекту персональных данных.
                </div>
              </div>
            </div>
            <div className="policy_sentence">
              <div className="policy_h2">3.</div>
              <div className="policy_h2">Основные права и обязанности Оператора</div>
            </div>
            <div className="policy_paragraph">
              <div className="policy_sentence ">
                <div className="h4 policy_h4">3.1.</div>
                <div className="h4 policy_h4">Оператор имеет право:</div>
              </div>
              <div className="policy_sentence policy_paragraph_level_1 ">
                <div className="h4 policy_h4">3.1.1.</div>
                <div className="h4 policy_h4">
                  Получать от субъекта персональных данных достоверные информацию и/или документы, содержащие
                  персональные данные;
                </div>
              </div>
              <div className="policy_sentence policy_paragraph_level_1 ">
                <div className="h4 policy_h4">3.1.2.</div>
                <div className="h4 policy_h4">
                  В случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор
                  вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии
                  оснований, указанных в Законе о персональных данных;
                </div>
              </div>
              <div className="policy_sentence">
                <div className="h4 policy_h4">3.2.</div>
                <div className="h4 policy_h4">Оператор обязан:</div>
              </div>
              <div className="policy_sentence">
                <div className="h4 policy_h4 policy_paragraph_level_1 ">3.2.1.</div>
                <div className="h4 policy_h4">
                  Предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки
                  его персональных данных;
                </div>
              </div>
              <div className="policy_sentence">
                <div className="h4 policy_h4 policy_paragraph_level_1 ">3.2.2.</div>
                <div className="h4 policy_h4">
                  Организовывать обработку персональных данных в порядке, установленном действующим законодательством
                  РФ;
                </div>
              </div>
            </div>
            <div className="policy_sentence">
              <div className="policy_h2">4.</div>
              <div className="policy_h2">Оператор может обрабатывать следующие персональные данные Пользователя</div>
            </div>
            <div className="policy_paragraph">
              <div className="policy_sentence">
                <img src={Dot} alt="dot" />
                <div className="h4 policy_h4">Фамилия, имя, отчество</div>
              </div>
              <div className="policy_sentence">
                <img src={Dot} alt="dot" />
                <div className="h4 policy_h4">Электронный адрес</div>
              </div>
              <div className="policy_sentence">
                <img src={Dot} alt="dot" />
                <div className="h4 policy_h4">Номера телефонов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
})

export default Policy
