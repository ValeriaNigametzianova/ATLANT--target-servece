import React from 'react'
import { HashLink } from 'react-router-hash-link'

const ButtonToTop = () => {
  return (
    <HashLink smooth to="#top">
      <div className="button_to_top" style={{ rotate: '-45deg' }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 17L17 1M17 1H7M17 1V11" stroke="#AEFF01" stroke-width="2" />
        </svg>
      </div>
    </HashLink>
  )
}

export default ButtonToTop
