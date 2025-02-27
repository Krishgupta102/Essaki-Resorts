import React from 'react'
import './Home.css'
import BookingForm from './BookingForm'
import TripCards from './TripCards'
import Services from './Services'

const Home = () => {
  return (
    <div className='home'>
      <div className="para">
        <h2><b>Welcome to Esakki</b></h2>
        <h2><b>A Soothing atmosphere. A Luxurious living.</b></h2>
      </div>
      <div className="img">
        <img src="/homeimg.jpg" alt="" />
      </div>

      <BookingForm/>

      <div className="offers">
        <TripCards/>
      </div>

      <Services/>
    </div>
  )
}

export default Home
