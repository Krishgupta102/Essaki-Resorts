import React from "react";

const trips = [
  {
    title: "Dining",
    description:
      "This first-class dining facility operation is located near Five Falls, Kutralam, serving variety of meals a month in support of the Air Force’s readiness and peacetime missions.",
    image: "/dining_offer.png",
  },
  {
    title: "Rooms",
    description:
      "Spain is a country located in Southern Europe, with parts of its territory in the Atlantic Ocean, the Mediterranean Sea, and Africa. It is the largest country in Southern Europe and the fourth-most populous in Europe.",
    image: "/room1.jpg",
  },
  {
    title: "Community Hall",
    description:
      "Community hall generally perform many of the functions in its community (Birthday Parties, Marriage, Meeting etc).",
    image: "/communityroom.jpg",
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

const TripCards = () => {
  return (
    <div className="p-6 mt-20">
      <h1 className="text-4xl font-bold text-center mb-6 font-serif">We Offers</h1>
      <p className="text-center text-gray-600 mb-8 font-serif">
        We offers the best resorts and dining across India.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {trips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default TripCards;
