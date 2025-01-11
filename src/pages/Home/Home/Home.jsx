import { useState } from "react";
import {Link, NavLink } from "react-router-dom";
import FAQ from "../../../components/Home/FAQ"


const Home= () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
     <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-[#D9EEF3] text-gray-900"}  h-full  flex  `}>
      {/* Sidebar Navigation */}
      <aside className="flex flex-col w-64 p-4 bg-white-100 dark:text-black ">
        <NavLink to="/" className={`mb-6 text-2xl font-bold  ${darkMode? "text-white":"text-[#0D6073]"}`}>TypingTest.com</NavLink>
        <nav>
          <ul className="flex flex-col space-y-4">
            <Link to="/test" className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-[#0D6073] rounded-xl hover:text-white text-[#1f8ea6]">Typing Test</Link>
            <Link to="/practice" className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-[#0D6073] rounded-xl hover:text-white text-[#1f8ea6]">Typing Practice</Link>
            <Link to="/typingLesson" className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-[#0D6073] rounded-xl hover:text-white text-[#1f8ea6]">Typing Lessons</Link>
            <Link to="/tricky" className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-[#0D6073] rounded-xl hover:text-white text-[#1f8ea6]">Tricky Keys</Link>
            <Link to="/benchmark" className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-[#0D6073] rounded-xl hover:text-white text-[#1f8ea6]">Typing Benchmark</Link>
            <Link to="/certificate" className="w-40 px-2 py-1 text-center cursor-pointer hover:bg-[#0D6073] rounded-xl hover:text-white text-[#1f8ea6]">Typing Certification</Link>
            <Link to="/b_blitz" className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-[#0D6073] rounded-xl hover:text-white text-[#1f8ea6]">Bigram Blitz</Link>
            <Link to="/games" className="w-40 px-3 py-1 text-center cursor-pointer hover:bg-[#0D6073] rounded-xl hover:text-white text-[#1f8ea6]">Typing Games</Link>
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
      <main className="flex flex-col w-[900px] items-center px-2 bg-[#ECF7F9] ">
        <h2 className="mb-2 md:text-3xl font-bold text-[#0D6073]">Check your typing skills in a minute</h2>
        <p className="mb-8 text-lg text-center text-[#1f8ea6]">Type away to join 150+ million test takers!</p>



        {/* Test Selection */}
        <div className="mb-6 space-y-4 ">
          <div className="flex flex-col items-center">
            <label htmlFor="test-duration" className="mb-2 font-medium text-center text-[#1f8ea6]">Select Your Test</label>
            <select
              id="test-duration"
              className="w-48 px-4 py-2 text-sm text-black bg-white border dark:bg-gray-700 focus:outline-none rounded-2xl bg-white-700 "
            >
              <option value={30}>30 second Test</option>
              <option value={1}>1 Minute Test</option>
              <option value={2}>2 Minute Test</option>
              <option value={3}>3 Minute Test</option>
              <option value={5}>5 Minute Test</option>
            </select>
          </div>
          <div className="flex flex-col items-start">
            
            <select
              id="text-type"
              className="w-48 px-4 py-2 text-sm text-black bg-white border dark:bg-gray-700 focus:outline-none rounded-2xl bg-white-700"
            >
              <option value="Easy" >Easy Text</option>
              <option value="Medium">Medium Text</option>
              <option value="Hard">Hard Text</option>
              <hr></hr>
              <option value="Benchmark">Benchmark(2 min)</option>
              <option value="Certificate">Certificate</option>
              <hr></hr>
              <option value="Tricky">Tricky Spelling</option>
              <option value="Blind">Blind Typing</option>
              <option value="Story">Story Typing</option>
              <option value="Themed">Themed...</option>
              <hr></hr>
              <option value="Professional">Professional...</option>
            </select>
          </div>
        </div>


        

        {/* Buttons update working  */}
      
        <Link
        to="/test"
        className="px-6 py-2 mb-4 text-white transition duration-300 bg-[#0D6073] shadow-md rounded-3xl"
        onClick={() => {
          const testDuration = document.getElementById("test-duration").value;
          const textType = document.getElementById("text-type").value;

          localStorage.setItem("testDuration", testDuration);
          localStorage.setItem("textType", textType);
        }}
      >
        Start Test
        </Link>

        <div className="pt-4 mt-10 border-t border-gray-300 dark:border-gray-700">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="hidden toggle-checkbox"
              onChange={toggleDarkMode}
            />
            <div className="relative w-10 h-5 bg-gray-300 rounded-full dark:bg-black-600">
              <div
                className={`w-4 h-4 bg-white dark:bg-gray-800 rounded-full shadow transform duration-300  ${
                  darkMode ? "translate-x-5 " : "translate-x-0"
                }`}
              ></div>
            </div>
            <span>Dark Mode</span>
          </label>
        </div>
      </main>
     
    </div>
    <FAQ/>
    </>
    
    
    
  );
  
};

export default Home;
