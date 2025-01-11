import { useState } from "react";
import {
  FaHome,
  FaKeyboard,
  FaGamepad,
  FaBlog,
  FaSignInAlt,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white w-full  bg-[#0D6073]">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* Brand */}
        <div className="flex items-center">
          <NavLink to="/" className="text-lg font-bold">
            Typing Speed
          </NavLink>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="text-white xl:hidden lg:hidden "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`flex flex-col lg:flex-row md:items-center items-center text-center gap-5 ${
            isOpen ? "block" : "hidden lg:flex"
          }`}
        >
          {/* Links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 hover:text-yellow-400 ${
                isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              `flex items-center space-x-2 hover:text-yellow-400 ${
                isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <FaKeyboard />
            <span>Test</span>
          </NavLink>
          <NavLink
            to="/typingLesson"
            className={({ isActive }) =>
              `flex items-center space-x-2 hover:text-yellow-400 ${
                isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <FaKeyboard />
            <span>Typing Lesson</span>
          </NavLink>
          <NavLink
            to="/games"
            className={({ isActive }) =>
              `flex items-center space-x-2 hover:text-yellow-400 ${
                isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <FaGamepad />
            <span>Games</span>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center space-x-2 hover:text-yellow-400 ${
                isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <FaBlog />
            <span>Blog</span>
          </NavLink>

          <a
            href="#author"
            className="flex items-center space-x-2 hover:text-yellow-400"
          >
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://i.ibb.co.com/L9RSHKh/user-3296-1.png"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-[1] mt-3 w-52 p-5 shadow"
              >
                <li>
                  <Link
                    to="/login"
                    className={({ isActive }) =>
                      `flex items-center space-x-2 ${
                        isActive ? "text-yellow-400" : ""
                      }`
                    }
                  >
                    <ImProfile />
                    <span>Profile</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/login"
                    className={({ isActive }) =>
                      `flex items-center space-x-2 ${
                        isActive ? "text-yellow-400" : ""
                      }`
                    }
                  >
                    <FaSignInAlt />
                    <span>Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
