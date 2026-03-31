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
import Profile from './views/Profile'
import NotFound from './views/NotFound'

const App = () => {

  return (

    <div className=' d-flex flex-column min-vh-100'>
      <Navbar />
      <main className='flex-grow-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
