import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./Booking.css";

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className=" book bg-white p-4 rounded-lg shadow-lg flex items-center gap-4 ">
      <div className="flex flex-col">
        <label className="text-sm font-semibold">Check-in date</label>
        <div className="border p-2 rounded flex items-center gap-2">
          <FaCalendarAlt />
          <input
            type="date"
            className="bg-transparent outline-none"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-semibold">Check-out date</label>
        <div className="border p-2 rounded flex items-center gap-2">
          <FaCalendarAlt />
          <input
            type="date"
            className="bg-transparent outline-none"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-semibold">Guests</label>
        <div className="flex gap-2 text-sm">
          <span>{rooms} ROOMS</span>
          <span>{adults} ADULTS</span>
          <span>{children} CHILDREN</span>
        </div>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded">BOOK NOW</button>
    </div>
  );
};

export default BookingForm;
