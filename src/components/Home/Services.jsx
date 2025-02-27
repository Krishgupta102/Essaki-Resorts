import React from "react";

const trips = [
  {
    title: "Dining",
    description:
      "This first-class dining facility operation is located near Five Falls, Kutralam, serving variety of meals a month in support of the Air Force’s readiness and peacetime missions.",
    image: "/dining_offer.png",
  },
  {
    title: "Cottage",
    description:
      "We provide world class cottages with all the modern amenities. Our cottages are designed to provide you with the best comfort and luxury.",  
    image: "/cottage.jpg",
  },
  {
    title: "Penthouse",
    description:
      "Our penthouse is the best place to stay in our resort. It is designed to provide you with the best comfort and luxury. It is the best place to stay in our resort.",   
    image: "/penthouse.jpg",
  },
];

const TripCard = ({ trip }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm">
      <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{trip.title}</h3>
        <p className="text-gray-600 mt-2">{trip.description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="p-6 mt-10">
      <h1 className="text-4xl font-bold text-center mb-6 font-serif">Our Services</h1>
      <p className="text-center text-gray-600 mb-8 font-serif">
        We offers variety of quality and premium services in our resorts.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {trips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default Services;
