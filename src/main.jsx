import App from './App.jsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./context/CartContext.jsx";
import PizzaProvider from './context/PizzaContext.jsx';
import './index.css'

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
