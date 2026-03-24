import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from "./views/Home"
import Pizza from './views/Pizzas'
import Login from './views/Login'
import Register from "./views/Register"
import Cart from './views/Cart'

const App = () => {

  return (

    <div className=' d-flex flex-column min-vh-100'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
