import { createContext } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import AppStore from './store/AppStore'
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        app: new AppStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
)
reportWebVitals()
