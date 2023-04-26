import React from 'react'
import AdvatageIcon from '../icons/advantage.svg'
import '../css/tarifCard.css'
import '../css/fonts.css'
import '../css/buttons.css'
import ArrowLink from '../icons/arrow_button_cards.svg'

const TarifCard = ({ title, price, advantages }) => {
  return (
    <div className="tarif">
      <div style={{ zIndex: '3' }}>
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
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '12px', height: '12px' }}
          >
            <path d="M1 17L17 1M17 1H7M17 1V11" stroke="#AEFF01" stroke-width="2" />
          </svg>
        </div>
      </div>
      <svg
        id="hover_light"
        width="540"
        height="100%"
        viewBox="0 0 540 745"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_513_2159"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="540"
          height="745"
        >
          <rect width="540" height="745" rx="10" fill="#070709" />
        </mask>
        <g mask="url(#mask0_513_2159)">
          <g opacity="0.5" filter="url(#filter0_f_513_2159)">
            <ellipse cx="264.5" cy="723" rx="331.5" ry="136" fill="#01d0ff00" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default TarifCard
