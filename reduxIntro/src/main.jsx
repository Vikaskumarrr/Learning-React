import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx"
import { Cart } from './cart/index.jsx'
createRoot(document.getElementById('root')).render(
    < Cart />
)

