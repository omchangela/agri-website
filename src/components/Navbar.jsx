import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Clear any authentication data (like tokens) here, if applicable
    setDropdownOpen(false);
    navigate('/login'); // Redirect to /login
  };

  return (
    <nav className="bg-white px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-500">
          <img src={logo} alt="Logo" className="h-20 inline-block ml-6 w-40" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-green-500">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-500">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-green-500">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-500">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Desktop User Icon with Dropdown */}
        <div className="hidden md:block relative mr-6">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <FaUserCircle className="text-3xl text-gray-700" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={handleLogout} // Call handleLogout on click
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Links and User Icon */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-green-500">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-green-500">About</Link>
          <Link to="/services" className="block text-gray-700 hover:text-green-500">Services</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-green-500">Contact Us</Link>

          {/* Mobile User Icon with Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none flex items-center space-x-2">
              <FaUserCircle className="text-3xl text-gray-700" />
              <span className="text-gray-700">User</span>
            </button>
            {dropdownOpen && (
              <div className="mt-2 w-full bg-white border rounded shadow-lg z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Profile
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
