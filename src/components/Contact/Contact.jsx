import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  const locations = [
    {
      name: "ESAKKI HIGH VIEW RESORTS",
      type: "Main Branch",
      description: "Experience luxury amidst the serene Falls Main Road",
      address: {
        street: "Five Falls Main Road",
        area: "Courtallam - 627 802",
        district: "Tirunelveli District",
        state: "Tamilnadu, India"
      },
      contact: {
        phone: "04633 283773, 283724",
        mobile: "+91 94 8705 7119",
        email: "esakkiresort@gmail.com"
      },
      hours: "Open 24/7"
    },
    {
      name: "ESAKKI HIGH VIEW RESORTS",
      type: "Old Courtallam Branch",
      description: "Your perfect getaway in the heart of Old Courtallam",
      address: {
        street: "Old Falls Main Road",
        area: "Old Courtallam - 627 802",
        district: "Tirunelveli District",
        state: "Tamilnadu, India"
      },
      contact: {
        phone: "04633 296141",
        mobile: "+91 94 4362 7119",
        email: "esakkiresort@gmail.com"
      },
      hours: "Open 24/7"
    },
    {
      name: "ESAKKI CHANRA INN",
      type: "Premium Location",
      description: "Luxury accommodations with a traditional touch",
      address: {
        street: "Old Falls Main Road",
        area: "Old Courtallam - 627 802",
        district: "Tirunelveli District",
        state: "Tamilnadu, India"
      },
      contact: {
        phone: "04633 296191",
        mobile: "+91 94 4362 7119",
        email: "esakkichandrainn@gmail.com"
      },
      hours: "Open 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full mt-4">
        <img 
          src="/contact.jpg" 
          alt="Hotel interior"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-serif mb-4">Contact Us</h1>
          <div className="flex items-center gap-2 text-lg">
            <a href="/" className="hover:text-gray-200 transition">Home</a>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Address</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find us in your city</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Contact Information Section */}
        <div className="grid gap-8 md:gap-12">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl">
              <div className="grid md:grid-cols-2">
                {/* Contact Information */}
                <div className="p-8">
                  <div className="mb-8">
                    <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">{location.type}</span>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">{location.name}</h2>
                    <p className="text-gray-600 mt-2">{location.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>{location.address.street},</p>
                          <p>{location.address.area},</p>
                          <p>{location.address.district},</p>
                          <p>{location.address.state}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Contact Numbers</h3>
                        <div className="space-y-1">
                          <p>
                            <span className="text-gray-600">Phone: </span>
                            <a href={`tel:${location.contact.phone}`} className="text-blue-600 hover:text-blue-800">
                              {location.contact.phone}
                            </a>
                          </p>
                          <p>
                            <span className="text-gray-600">Mobile: </span>
                            <a href={`tel:${location.contact.mobile}`} className="text-blue-600 hover:text-blue-800">
                              {location.contact.mobile}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href={`mailto:${location.contact.email}`} className="text-blue-600 hover:text-blue-800">
                          {location.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">{location.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Get Directions
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Map */}
                <div className="h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1OZoT8Rt9Piv-Wu1Ijsdsf_Eys_o"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map location for ${location.name}`}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;