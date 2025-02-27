import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 

const Navbar = () => {
  return (
    <div className='nav-cont'>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>

      <div className="nav ">
        <ul>
          <li>
            <a href="/">Home</a>
            <a href="/About">About Us</a>
            <a href="/Rooms">Rooms</a>
            <a href="#">Gallery</a>
            <a href="/Contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
