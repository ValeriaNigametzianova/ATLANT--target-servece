import React from 'react'
import '../css/form.css'
import '../css/fonts.css'
import '../css/buttons.css'
import styled from 'styled-components'

const Label = styled.label`
  opacity: 0.8;
  width: fit-content;
  &:after {
    content: '${(props) => (props.required ? '*' : '')}';
    padding-left: 2px;
    color: #01d1ff;
  }
`

const Form = (props) => {
  return (
    <div className="form_wrapper">
      <form className="form">
        <p className="form_field">
          <Label htmlFor="username" className="h5" required>
            Имя
          </Label>
          <input
            id="username"
            name="username"
            required="required"
            type="text"
            // placeholder="myusername or mymail@mail.com"
          />
        </p>
        {props.partnership ? (
          <p className="form_field">
            <Label htmlFor="username" className="h5" required>
              Компания
            </Label>
            <input
              id="username"
              name="username"
              required="required"
              type="text"
              // placeholder="myusername or mymail@mail.com"
            />
          </p>
        ) : (
          <></>
        )}
        <p className="form_field">
          <Label htmlFor="password" className="h5" required>
            Почта
          </Label>
          <input id="password" name="password" required="required" type="text" />
        </p>

        {props.partnership ? (
          <p className="form_field">
            <Label htmlFor="username" className="h5" required>
              Телефон
            </Label>
            <input
              id="username"
              name="username"
              required="required"
              type="text"
              // placeholder="myusername or mymail@mail.com"
            />
          </p>
        ) : (
          <></>
        )}

        <p className="form_field">
          <Label htmlFor="comment" className="h5">
            Комментарий
          </Label>
          <input id="comment" name="comment" type="text" />
          {/* <textarea id="comment" name="comment" rows="2"></textarea> */}
        </p>
        {props.partnership ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Label className="h5">Бюджет:</Label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="button_switch">До 100 тыс.</button>
              <button className="button_switch">До 500 тыс.</button>
              <button className="button_switch">До 1 млн</button>
              <button className="button_switch">До 3 млн</button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Label className="h5">Тариф:</Label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div className="button_switch">Стандартный</div>
              <div className="button_switch">Расширенный</div>
              <div className="button_switch">Полный</div>
              <div className="button_switch">Не уверен</div>
            </div>
          </div>
        )}
        <div className="h5" style={{ opacity: '0.8' }}>
          Нажимая кнопку, вы даете согласие на&nbsp;
          <span className="header_h6">обработку персональных данных</span>
        </div>
      </form>
      <button className="button_fill">Отправить</button>
    </div>
  )
}

export default Form
