import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled, { css } from 'styled-components'
import '../css/newsblog.css'

const NewsBlog = ({ image, label, title, description, time, date }) => {
  const Newscard_background_photo = styled.div`
    width: inherit;
    height: 37.468%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-image: url(${(props) => props.image});
  `

  return (
    <HashLink to="/blog/post" className="newscard">
      <div className="newscard_background">
        <Newscard_background_photo image={image}></Newscard_background_photo>
      </div>
      <div className="newdcard_content">
        <div className="metka h5">{label}</div>
        <div className="newdcard_content_text">
          <div className="newdcard_content_paragraph">
            <div className="h3_roboto">{title}</div>
            <div className="h4">{description}</div>
          </div>
          <div className="newdcard_content_info">
            <div className="h5">{time}</div>
            <div className="h5">{date}</div>
          </div>
        </div>
      </div>
    </HashLink>
  )
}

export default NewsBlog
