import React from 'react';
import { Heart } from 'lucide-react';

const HotelListing = () => {
  const hotels = [
    {
      name: "Deluxe Room",
      rating: 4,
      location: "Neemrana",
      distance: "8 km from centre",
      roomType: "Deluxe Room",
      beds: "1 double bed",
      price: 7650,
      taxes: 1377,
      reviews: 268,
      reviewScore: 6.8,
      image: "/room1.jpg",
      features: [
        "Free cancellation",
        "No prepayment needed – pay at the property"
      ]
    },
    {
      name: "Penthouse",
      rating: 3,
      location: "Neemrana",
      distance: "8.2 km from centre",
      roomType: "Standard Double Room",
      beds: "2 large double beds",
      price: 2086,
      originalPrice: 4257,
      taxes: 301,
      featured: true,
      dealTag: "Early 2025 Deal",
      image: "/penthouse.jpg",
      features: [
        "Free cancellation",
        "No prepayment needed – pay at the property"
      ]
    },
    {
      name: "Cottage",
      rating: 2,
      location: "Neemrana",
      distance: "3.8 km from centre",
      roomType: "Standard Queen Room",
      beds: "2 large double beds",
      price: 3275,
      taxes: 393,
      reviews: 12,
      reviewScore: 6.4,
      image: "/cottage.jpg",
      features: [
        "Free cancellation"
      ]
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 mt-20">
      {hotels.map((hotel, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="flex">
            <div className="relative w-72 h-48">
              <img 
                src={hotel.image} 
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-2 right-2 p-1 rounded-full bg-white/80">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold text-blue-600">{hotel.name}</h2>
                    <span className="text-yellow-400">{renderStars(hotel.rating)}</span>
                    {hotel.featured && (
                      <span className="px-2 py-1 text-xs border border-gray-300 rounded">Featured</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <a href="#" className="text-blue-600">{hotel.location}</a>
                    <a href="#" className="text-blue-600">Show on map</a>
                    <span>{hotel.distance}</span>
                  </div>
                </div>
                
                {hotel.reviewScore && (
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <div className="text-sm">Review score</div>
                      <div className="px-2 py-1 text-white bg-blue-600 rounded">
                        {hotel.reviewScore}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{hotel.reviews} reviews</div>
                  </div>
                )}
              </div>

              {hotel.dealTag && (
                <div className="mt-2">
                  <span className="px-2 py-1 text-sm text-white bg-green-600 rounded">
                    {hotel.dealTag}
                  </span>
                </div>
              )}

              <div className="mt-4">
                <div className="font-medium">{hotel.roomType}</div>
                <div className="text-sm text-gray-600">{hotel.beds}</div>
                
                <div className="mt-2 space-y-1">
                  {hotel.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-green-700">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between items-end">
              <div className="text-right">
                {hotel.originalPrice && (
                  <div className="line-through text-gray-500">₹ {hotel.originalPrice.toLocaleString()}</div>
                )}
                <div className="text-2xl font-bold">₹ {hotel.price.toLocaleString()}</div>
                <div className="text-sm text-gray-600">+₹ {hotel.taxes} taxes and charges</div>
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                See availability
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelListing;