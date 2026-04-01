// Importación de estilos globales y Bootstrap
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Hooks y herramientas de React Router
import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Componentes de layout (estructura de la app)
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Vistas principales (páginas)
import Home from "./views/Home"
import Pizza from './views/Pizzas'
import Login from './views/Login'
import Register from "./views/Register"
import Cart from './views/Cart'
import Profile from './views/Profile'
import NotFound from './views/NotFound'

// Contexto de usuario para manejar autenticación global
import { UserContext } from './context/UserContext'


/**
 * Componente principal de la aplicación
 * Define la estructura base (Navbar, Footer)
 * y configura las rutas con React Router
 */
const App = () => {

  // Obtenemos el token para saber si el usuario está autenticado
  const { token } = useContext(UserContext)

  return (

    <div className=' d-flex flex-column min-vh-100'>
      {/* Barra de navegación visible en todas las páginas */}
      <Navbar />
      {/* Contenido dinámico según la ruta */}
      <main className='flex-grow-1'>
        <Routes>
          {/* Ruta pública: página principal */}
          <Route path="/" element={<Home />} />

          {/* Ruta dinámica: muestra una pizza según su id */}
          <Route path="/pizza/:id" element={<Pizza />} />

          {/* 
            Ruta protegida inversa:
            Si NO hay token, permite acceso
            Si hay token, redirige al home
          */}
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />

          {/* Mismo comportamiento que login */}
          <Route
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />

          {/* Ruta pública: carrito de compras */}
          <Route path="/cart" element={<Cart />} />

          {/* 
            Ruta protegida:
            Si hay token, permite acceso
            Si NO hay token, redirige al login
          */}
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />

          {/* Ruta para cualquier path no definido */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  )
}

export default App
