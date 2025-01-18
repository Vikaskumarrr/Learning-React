import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeApp from './ThemeApp.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeApp />
    // <App />
  
)
