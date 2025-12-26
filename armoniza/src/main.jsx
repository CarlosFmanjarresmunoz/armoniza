import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InicioSesion from  './inicioSesion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <InicioSesion />
  </StrictMode>,
)
