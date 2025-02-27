import React from 'react';
import { Card, CardContent } from './card';
import { MapPin, Mountain, Clock, Umbrella } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to Esakki High View Resorts</h1>
          <p className="text-lg text-gray-600">Where Nature Meets Luxury in the Western Ghats</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Paradise</h2>
              <p className="text-gray-700 mb-4">
                Nestled in the breathtaking Western Ghats, Esakki High View Resorts offers a perfect blend of traditional Indian hospitality and modern comfort. Located just 500 meters from the historic Courtallam falls, our resort serves as your gateway to nature's finest spectacles.
              </p>
              <p className="text-gray-700">
                Experience the magic of our location where cloud-capped mountains meet cascading waterfalls, creating an atmosphere of unparalleled serenity and natural beauty.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Natural Wonders</h2>
              <p className="text-gray-700 mb-4">
                Discover our proximity to seven magnificent waterfalls: Old Falls, Main Falls, Five Falls, Tiger Falls, Chembakadevi Falls, Honey Falls, and New Falls. Each offers its unique charm and therapeutic benefits.
              </p>
              <p className="text-gray-700">
                Our resort stands 170 meters above sea level, offering panoramic views and refreshing mountain breezes that make every moment special.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="flex flex-col items-center text-center p-4">
            <MapPin className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-800 mb-2">Prime Location</h3>
            <p className="text-gray-600">Adjacent to Five Falls Main Road</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <Mountain className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-800 mb-2">Scenic Beauty</h3>
            <p className="text-gray-600">Surrounded by Western Ghats</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <Clock className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-800 mb-2">Best Time to Visit</h3>
            <p className="text-gray-600">June to September</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <Umbrella className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-800 mb-2">Monsoon Magic</h3>
            <p className="text-gray-600">Experience refreshing showers</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Experience Tranquility</h2>
          <p className="mb-6">Let us make your stay memorable with our signature hospitality and serene surroundings</p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;