import React, { useState } from 'react';
import { FaHome, FaKeyboard, FaGamepad, FaBlog, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-gray-800 ">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <div className="flex items-center">
          <NavLink to="/" className="text-lg font-bold">Typing Speed</NavLink>
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <div
          className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a
            href="#home"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <FaHome />
            <NavLink to="/">Home</NavLink>
          </a>
          <a
            href="#test"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <FaKeyboard />
            <NavLink to="/test">Test</NavLink>
          </a>
          <a
            href="#lessons"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <FaKeyboard />
            <NavLink to="/typingLesson">Typing lesson</NavLink>
          </a>
          <a
            href="#games"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <FaGamepad />
            <NavLink to="/games">Games</NavLink>
          </a>
          <a
            href="#blog"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <FaBlog />
            <NavLink to="/blog">Blog</NavLink>
          </a>
          <a
            href="#signup"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <FaUserPlus />
            <NavLink to="/sinUP">Sign UP</NavLink>
          </a>
          <a
            href="#signin"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <FaSignInAlt />
            <NavLink to="/sinIN">Sign IN</NavLink>
          </a>
          <a
            href="#author"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <FaUser />
            <span>Author</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
