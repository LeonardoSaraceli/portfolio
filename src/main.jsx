import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './assets/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import './lib/i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
