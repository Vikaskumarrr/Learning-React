import { createRoot } from 'react-dom/client'
import { ShoppingApp } from './shopping/index.jsx'
import App from "./App.jsx"
import { Cart } from './cart/index.jsx'
createRoot(document.getElementById('root')).render(
    < ShoppingApp/>
)

