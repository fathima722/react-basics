import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/navigation/Nav'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter><Nav /></BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
