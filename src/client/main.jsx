import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider } from 'react-router-dom'
import { Form, LandingPage } from './components'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="/register" element={<Form />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
