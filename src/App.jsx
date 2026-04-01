import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from "./views/Home"
import Pizza from './views/Pizzas'
import Login from './views/Login'
import Register from "./views/Register"
import Cart from './views/Cart'
import Profile from './views/Profile'
import NotFound from './views/NotFound'

import { UserContext } from './context/UserContext'


const App = () => {

  const { token } = useContext(UserContext)

  return (

    <div className=' d-flex flex-column min-vh-100'>
      <Navbar />
      <main className='flex-grow-1'>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/pizza/:id" element={<Pizza />} />

          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />

          <Route
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
