import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/**
 * playlist : 
 *  each playlist  has multiple songs 
 * 
 * 1. Music plays 
 * 2. Liked songs
 * 
 * user can play the song from list of songs present in playlist or from liked songs
 * 
 * 
 */
