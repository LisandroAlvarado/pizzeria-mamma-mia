import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartProvider from "./context/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";


import './index.css'
import App from './App.jsx'
import PizzaProvider from './context/PizzaContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PizzaProvider>
      <CartProvider>
        <BrowserRouter basename='/pizzeria-mamma-mia/'>
          <App />
        </BrowserRouter>
      </CartProvider>
    </PizzaProvider>
  </StrictMode>,
)
