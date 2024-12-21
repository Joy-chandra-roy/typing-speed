import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home= () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"} min-h-screen flex`}>
      {/* Sidebar Navigation */}
      <aside className="flex flex-col w-64 p-4 bg-white-100 dark:bg-gray-900">
        <div className="mb-6 text-2xl font-bold">TypingTest.com</div>
        <nav>
          <ul className="space-y-4">
            <li className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-blue-500 rounded-xl">Typing Test</li>
            <li className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-blue-500 rounded-xl">Typing Practice</li>
            <li className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-blue-500 rounded-xl">Typing Lessons</li>
            <li className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-blue-500 rounded-xl">Tricky Keys</li>
            <li className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-blue-500 rounded-xl">Typing Benchmark</li>
            <li className="w-40 px-2 py-1 text-center cursor-pointer hover:bg-blue-500 rounded-xl">Typing Certification</li>
            <li className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-blue-500 rounded-xl">Bigram Blitz</li>
            <li className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-blue-500 rounded-xl">Typing Games</li>
          </ul>
        </nav>
        <div className="pt-4 mt-auto border-t border-gray-300 dark:border-gray-700">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="hidden toggle-checkbox"
              onChange={toggleDarkMode}
            />
            <div className="relative w-10 h-5 bg-gray-300 rounded-full dark:bg-gray-600">
              <div
                className={`w-4 h-4 bg-white dark:bg-gray-800 rounded-full shadow transform duration-300  ${
                  darkMode ? "translate-x-5 " : "translate-x-0"
                }`}
              ></div>
            </div>
            <span>Dark Mode</span>
          </label>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 p-10 bg-gray-100">
        <h2 className="mb-2 text-3xl font-bold">Check your typing skills in a minute</h2>
        <p className="mb-8 text-lg text-center">Type away to join 150+ million test takers!</p>

        {/* Test Selection */}
        <div className="mb-6 space-y-4 text-center">
          <div className="flex flex-col items-start">
            <label htmlFor="test-duration" className="mb-2 font-medium">Select Your Test:</label>
            <select
              id="test-duration"
              className="w-48 px-4 py-2 text-sm text-black bg-white border dark:bg-gray-700 focus:outline-none rounded-2xl bg-white-700"
            >
              <option>1 Minute Test</option>
              <option>3 Minute Test</option>
              <option>5 Minute Test</option>
            </select>
          </div>
          <div className="flex flex-col items-start">
            
            <select
              id="text-type"
              className="w-48 px-4 py-2 text-sm text-black bg-white border dark:bg-gray-700 focus:outline-none rounded-2xl bg-white-700"
            >
              <option>Medium Text</option>
              <option>Short Text</option>
              <option>Long Text</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <NavLink to="/test" className="px-6 py-2 mb-4 text-white transition duration-300 bg-blue-500 rounded-md shadow-md hover:bg-blue-600">
          Start Test
        </NavLink>
        
      </main>
    </div>
  );
};

export default Home;
