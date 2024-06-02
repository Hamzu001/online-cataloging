import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from './Layout.jsx'
import './index.css'
import { ContextProvider } from './context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
    <AppLayout/>
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
