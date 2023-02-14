import React from 'react'
import '../css/main.css'
import styled, { css } from 'styled-components'

const NewsCard = ({ className, image, position, title, time, date }) => {
  const News = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 40px 40px 30px 40px;
    align-items: end;
    border: 1px solid rgba(1, 209, 255, 0.3);
    border-radius: 10px;
    color: ${(props) => (props.image ? '#ffffff' : '#000000')};
    background-image: url(${(props) => props.image});
    background-color: ${(props) => (props.image ? '#000000' : '#01d1ff')};
    background-size: no-repeat;
    background-position: center;
    background-size: cover;
  `
  const NewsCardContent = styled.div`
    ${(props) => {
      switch (props.position) {
        case 'top':
          return css`
            display: flex;
            justify-content: space-between;
            flex-grow: 1;
            flex-direction: column;
            gap: 24px;
            margin-top: 252px;
          `
        case 'bottom':
          return css`
            display: flex;
            flex-direction: column;
            gap: 78px;
          `
        default:
          return css`
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: auto;
          `
      }
    }}
  `
  return (
    <News image={image} className={className}>
      {/* <img src={News1} alt="photo_keys_Ozon" style={{ zIndex: '-1' }} /> */}
      <NewsCardContent position={position}>
        <div className="h3_roboto display-linebreak"> {title}</div>
        <div className="news_card_info ">
          <div className="h5"> {time}</div>
          <div className="h5"> {date}</div>
        </div>
      </NewsCardContent>
      <div>
        <div></div>
        <div></div>
      </div>
    </News>
  )
}

export default NewsCard
