import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx"
import "./store.jsx"
createRoot(document.getElementById('root')).render(
    < store />
    // < App />
)

