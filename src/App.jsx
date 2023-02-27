import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useSearchParams } from 'react-router-dom'
import './App.css'
import Post from './Pages/Post'
import ScrollToTop from './Components/ScrollToTop'
import Main from './Pages/Main'
import Policy from './Pages/Policy'
import Titul from './Pages/Titul'
import Tools from './Pages/Tools'

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
          <Route path="/post" element={<Post />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
