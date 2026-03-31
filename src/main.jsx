import App from './App.jsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./context/CartContext.jsx";
import PizzaProvider from './context/PizzaContext.jsx';
import UserProvider from './context/UserContext.jsx';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/pizzeria-mamma-mia/'> {/* 👈 PRIMERO */}
      <UserProvider>
        <PizzaProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
