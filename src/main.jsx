import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={"/eliph.me/"}>
      <Routes>
        <Route path="*" element={ <App/>} />
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
