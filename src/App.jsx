import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Register from "./components/Register"
import Footer from './components/Footer'
// import Home from "./components/Home"
// import Login from './components/Login'

const App = () => {

  return (

    <div className=' d-flex flex-column min-vh-100'>
      <Navbar />
      {/* <Home /> */}
      <Register />
      {/*<Login /> */}
      <Footer />
    </div>
  )
}

export default App
