import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Rooms from './components/Rooms/Rooms'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/About' element={<About/> } />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Rooms' element={<Rooms/>} />
      </Routes>
  
      <Footer/>
    </>
  )
}

export default App
