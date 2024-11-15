import React, { useState } from "react";
import Navbar from "../components/Navbar";
import profileimg from "../assets/profileimg.png";

const Profileupdate = () => {
  // Initialize form data as empty, but use placeholder values in the inputs
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
  });

  // Handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can make an API call to update the profile
    alert("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-20 bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-center mb-6">
            {/* Profile Image */}
            <img
              src={profileimg}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Enter Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Krishna Dunga"
                className="w-full bg-gray-200 border border-[#02664AD9] rounded-lg p-2"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 1234567890"
                className="w-full bg-gray-200 border border-[#02664AD9] rounded-lg p-2"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Krishna@gmail.com"
                className="w-full bg-gray-200 border border-[#02664AD9] rounded-lg p-2"
              />
            </div>

            {/* DOB */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                DOB
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full bg-gray-200 border border-[#02664AD9] rounded-lg p-2"
              />
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full bg-gray-200 border border-[#02664AD9] rounded-lg p-2"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Update Profile Button */}
            <button
              type="submit"
              className="w-full bg-[#02664A] text-white font-semibold py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profileupdate;
