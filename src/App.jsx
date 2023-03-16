import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useSearchParams } from 'react-router-dom'
import './App.css'
import Post from './Pages/Post'
import ScrollToTop from './Components/ScrollToTop'
import Main from './Pages/Main'
import Policy from './Pages/Policy'
import Titul from './Pages/Titul'
import Tools from './Pages/Tools'
import UTM from './Pages/UTM'
import Blog from './Pages/Blog'

function App() {
  useEffect(() => {
    window.history.pushState('', document.title, window.location.pathname)
  }, [])

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
          <Route path="/*" element={<Main />} />
          <Route path="/tools/UTMMarkup" element={<UTM />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
