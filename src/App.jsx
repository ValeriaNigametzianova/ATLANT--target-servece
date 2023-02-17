import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Pages/Main'
import Policy from './Pages/Policy'
import Titul from './Pages/Titul'
import Tools from './Pages/Tools'

function App() {
  return (
    <BrowserRouter basename="/ATLANT-target-service">
      <div className="App">
        <Routes>
          <Route path="/" element={<Titul />} />
          <Route path="/main" element={<Main />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
