import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const SinIN = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.usernameOrEmail) {
      newErrors.usernameOrEmail = "Username or Email is required.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Sign-In Successful:", formData);
      alert("Sign-In Successful!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-green-500 to-blue-600">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit}>
          {/* Username or Email */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 text-gray-600">
              <FaUserAlt className="text-gray-500" />
              <span>Username or Email</span>
            </label>
            <input
              type="text"
              name="usernameOrEmail"
              placeholder="Enter your username or email"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 rounded-md border ${
                errors.usernameOrEmail ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-green-500`}
            />
            {errors.usernameOrEmail && (
              <span className="text-sm text-red-500">{errors.usernameOrEmail}</span>
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
              } focus:ring-2 focus:ring-green-500`}
            />
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-bold text-white transition bg-green-600 rounded-md hover:bg-green-700"
          >
            Sign In
          </button>
        </form>

        {/* Additional Options */}
        <div className="mt-6 text-sm text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
          <p className="mt-2">
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinIN;
