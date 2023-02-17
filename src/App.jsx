import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Pages/Main'
import Policy from './Pages/Policy'
import Tools from './Pages/Tools'

function App() {
  return (
    <BrowserRouter basename="/ATLANT">
      <div className="App">
        <Routes>
          <Route path="/" element={<Main title="ATLANT" />} />
          <Route path="/policy" element={<Policy title="Политика конфиденциальности" />} />
          <Route path="/tools" element={<Tools title="Политика конфиденциальности" />} />
          <Route path="/*" element={<Main title="ATLANT" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
