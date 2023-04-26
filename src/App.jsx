import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Post from './Pages/Post'
import ScrollToTop from './Components/ScrollToTop'
import Main from './Pages/Main'
import Policy from './Pages/Policy'
import Titul from './Pages/Titul'
import Tools from './Pages/Tools'
import UTM from './Pages/UTM'
import Blog from './Pages/Blog'
import Partnership from './Pages/Partnership'
import Contacts from './Pages/Contacts'
import { Context } from './index'
import { observer } from 'mobx-react-lite'
import Post_Newspaper from './Pages/Post_Newspaper'

const App = observer(() => {
  const { app } = useContext(Context)

  useEffect(() => {
    console.log(1, app.location)
    window.history.pushState('', document.title, window.location.pathname)
  })

  useEffect(() => {
    let elements = document.querySelectorAll('.screen, .second_screen')
    const observerr = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })
    elements.forEach((element) => {
      observerr.observe(element)
    })
  }, [app.location])
  return (
    <BrowserRouter basename="/ATLANT-target-service">
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Titul />} />
          <Route path="/main" element={<Main />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog/post" element={<Post />} />
          <Route path="/blog/post2" element={<Post_Newspaper />} />
          <Route path="/tools/UTMMarkup" element={<UTM />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
})

export default App
