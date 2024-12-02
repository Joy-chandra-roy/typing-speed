import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaUniversity, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    institution: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation (basic example)
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.institution) newErrors.institution = "Institution is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    // Check for errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Sign-Up Successful!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-600 to-purple-800">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 text-gray-600">
              <FaUserAlt className="text-gray-500" />
              <span>Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 rounded-md border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500`}
            />
            {errors.username && (
              <span className="text-sm text-red-500">{errors.username}</span>
            )}
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 text-gray-600">
              <FaUser className="text-gray-500" />
              <span>Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 text-gray-600">
              <FaEnvelope className="text-gray-500" />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 text-gray-600">
              <FaPhone className="text-gray-500" />
              <span>Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 rounded-md border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500`}
            />
            {errors.phone && (
              <span className="text-sm text-red-500">{errors.phone}</span>
            )}
          </div>

          {/* Institution */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 text-gray-600">
              <FaUniversity className="text-gray-500" />
              <span>Institution</span>
            </label>
            <input
              type="text"
              name="institution"
              placeholder="Enter your institution name"
              value={formData.institution}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 rounded-md border ${
                errors.institution ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500`}
            />
            {errors.institution && (
              <span className="text-sm text-red-500">{errors.institution}</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 text-gray-600">
              <FaLock className="text-gray-500" />
              <span>Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 rounded-md border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-bold text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
          <div className="text-center">
            <p>Already have an account?<NavLink className="text-blue-600" to='/sinIN'>SignIN</NavLink></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
