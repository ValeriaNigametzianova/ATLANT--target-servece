import React from 'react'
import AdvatageIcon from '../icons/advantage.svg'
import '../css/tarifCard.css'
import '../css/fonts.css'
import '../css/buttons.css'
import ArrowLink from '../icons/arrow_button_cards.svg'

const TarifCard = ({ title, price, advantages }) => {
  return (
    <div className="tarif">
      <div>
        <div className="h2 tarif_title">{title}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {advantages.map((el) => (
            <div className="tarif_advantages">
              <img src={AdvatageIcon} alt="icon" />
              <div className="h4" style={{ color: '#fff' }}>
                {el}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="tarif_price">
          <div className="h4" style={{ color: '#fff' }}>
            от
          </div>
          <div>{price}</div>
          <div className="h4" style={{ color: '#fff' }}>
            р/мес
          </div>
        </div>
        <div className="tarif_button_outline button_outline">
          Приобрести
          {/* <span style={{ alignItems: 'center' }}> */}
          <img src={ArrowLink} alt="arrow" style={{ width: '12px', height: '12px' }} />
          {/* </span> */}
        </div>
      </div>
    </div>
  )
}

export default TarifCard
