import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt  } from 'react-icons/fa'; // Importing icons
import logo from '../assets/logo2.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Your main content goes here */}
      </div>

      <footer className="bg-black text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-6">
            <img src={logo} alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Footer Content */}
          <div className="flex flex-wrap gap-6 md:gap-0 justify-between">
            {/* First Part */}
            <div className="w-full sm:w-1/2 md:w-1/4 space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start text-white mt-2">
                <FaMapMarkerAlt className="mr-2 text-white-500" /> {/* Address Icon */}
                <p className="text-white">Excel Agri office Jinnah Ghar</p>
              </div>
              <div className="flex items-center justify-center md:justify-start text-white mt-2">
                <FaEnvelope className="mr-2" />
                <p>Info@gmail.com</p>
              </div>
              <div className="flex items-center justify-center md:justify-start text-white mt-2">
                <FaPhone className="mr-2" />
                <p>+92309987757</p>
              </div>
              <div className="flex items-center justify-center md:justify-start text-white mt-2">
                <FaPhone className="mr-2" />
                <p>+9248376982</p>
              </div>
              <div className="flex items-center justify-center md:justify-start text-white mt-2">
                <FaWhatsapp className="mr-2" />
                <p>+92309987757</p>
              </div>
            </div>

            {/* Second Part */}
            <div className="w-full sm:w-1/2 md:w-1/4 space-y-2 text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-white hover:text-green-500">About Us</a></li>
                <li><a href="/contact" className="text-white hover:text-green-500">Contact Us</a></li>
                <li><a href="/return-policy" className="text-white hover:text-green-500">Return Policy</a></li>
                <li><a href="/privacy" className="text-white hover:text-green-500">Privacy Policy</a></li>
                <li><a href="/terms" className="text-white hover:text-green-500">Terms & Conditions</a></li>
                
              </ul>
            </div>

            {/* Third Part */}
            <div className="w-full sm:w-1/2 md:w-1/4 space-y-2 text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Other Info</h3>
              <ul className="space-y-2">
                <li><a href="/fnq" className="text-white hover:text-green-500">FAQ's</a></li>
                <li><a href="/coupons" className="text-white hover:text-green-500">Coupons</a></li>
                <li><a href="/career" className="text-white hover:text-green-500">careers</a></li>
                <li><a href="/quote" className="text-white hover:text-green-500">Get Quote</a></li>
                <li><a href="/site-map" className="text-white hover:text-green-500">Site Map</a></li>
                
              </ul>
            </div>

            {/* Fourth Part - Newsletter Signup */}
            <div className="w-full sm:w-1/2 md:w-1/4 space-y-4 text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Signup for Newsletter</h3>
              <p className="text-white">Get updates by subscribing to our weekly newsletter.</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center sm:space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-2 py-2 w-full sm:w-64 rounded-md text-gray-700 mb-2 sm:mb-0"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-green-700 text-center p-4 text-white">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
