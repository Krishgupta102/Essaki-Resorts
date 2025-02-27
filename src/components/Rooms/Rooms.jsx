import React from 'react'
import './Rooms.css'  
import HotelListing from './HotelListing'
const Rooms = () => {
  return (
    <div className='roomcontainer mt-3 relative'>
      <div className="imgr">
        <img src="/slider3.jpg" alt="" />
      </div>

      <div className="paragra">
        <h1>Rooms</h1>
      </div>

      <div className="parad mt-20 text-xl">
        <p><br /> Our Rooms</p>
        <p className=" font-bold text-5xl mt-5 ">A unique stay to meet <br></br> your needs</p>
      </div>

      <HotelListing/>
    </div>
  )
}

export default Rooms
