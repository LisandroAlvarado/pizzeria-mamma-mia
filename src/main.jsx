// Componente principal de la aplicación
import App from './App.jsx'

// Herramientas de React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Router para manejar navegación en la app
import { BrowserRouter } from "react-router-dom";

// Contextos globales (estado compartido)
import CartProvider from "./context/CartContext.jsx";
import PizzaProvider from './context/PizzaContext.jsx';
import UserProvider from './context/UserContext.jsx';

// Estilos globales
import './index.css'

// Punto de entrada de la aplicación React
// Aquí se renderiza toda la app en el DOM
createRoot(document.getElementById('root')).render(

  // StrictMode ayuda a detectar problemas en desarrollo
  <StrictMode>

    {/* 
      BrowserRouter permite manejar rutas en la app
      basename se usa porque la app está desplegada en una subruta
    */}
    <BrowserRouter basename='/pizzeria-mamma-mia/'>

      {/* Maneja la autenticación (token, login, logout)*/}
      <UserProvider>
        {/* Maneja el estado de las pizzas (listado, detalle, etc.)*/}
        <PizzaProvider>
          {/* Maneja el carrito de compras (agregar, eliminar, cantidades)*/}
          <CartProvider>
            {/* Componente raíz de la aplicación */}
            <App />
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
