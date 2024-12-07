import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Wishlist' element={<Wishlist/>}/>
      <Route path='/Cart' element={<Cart/>}/>




    </Routes>
   
    <Footer/>
      
    </>
  )
}

export default App
