import React, { useState, useEffect } from "react";

const Home = () => {
  const [difficulty, setDifficulty] = useState("Easy");
  const [timeLimit, setTimeLimit] = useState(60); // Default: 1 minute
  const [testStarted, setTestStarted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [resultsVisible, setResultsVisible] = useState(false);

  const sampleTexts = {
    Easy: [
      "The quick brown fox jumps over the lazy dog.",
      "A journey of a thousand miles begins with a single step.",
      "Practice makes perfect in all that you do.",
    ],
    Medium: [
      "Typing tests help you improve speed and accuracy.",
      "Programming requires focus, patience, and practice.",
      "Consistent effort leads to better results in typing.",
    ],
    Hard: [
      "Advanced typing requires focus, practice, and precision.",
      "Pseudocode often serves as the foundation of logical thinking.",
      "Debugging is an essential skill for software developers.",
    ],
  };

  // Generate random text based on difficulty
  const getRandomText = () => {
    const texts = sampleTexts[difficulty];
    return texts[Math.floor(Math.random() * texts.length)];
  };

  // Set random text on difficulty change
  useEffect(() => {
    setGeneratedText(getRandomText());
  }, [difficulty]);

  // Timer
  useEffect(() => {
    let timer;
    if (testStarted && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && testStarted) {
      finishTest();
    }
    return () => clearTimeout(timer);
  }, [testStarted, timeLeft]);

  // Start Test
  const startTest = () => {
    setTestStarted(true);
    setResultsVisible(false);
    setTimeLeft(timeLimit);
    setInputText("");
    setWpm(0);
    setAccuracy(0);
    setGeneratedText(getRandomText());
  };

  // Finish Test
  const finishTest = () => {
    setTestStarted(false);
    setResultsVisible(true);
    calculateResults();
  };

  // Calculate WPM and Accuracy
  const calculateResults = () => {
    const wordsTyped = inputText.trim().split(" ").length;
    const correctChars = [...inputText].filter(
      (char, idx) => char === generatedText[idx]
    ).length;
    const totalChars = generatedText.length;

    setWpm(Math.round((wordsTyped / timeLimit) * 60));
    setAccuracy(Math.round((correctChars / totalChars) * 100));
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-8 text-white bg-gradient-to-r from-blue-800 via-purple-800 to-gray-900">
      <h1 className="mb-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-bounce">
        Typing Speed Test
      </h1>

      {/* Settings */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md transition ${
            difficulty === "Easy" ? "bg-blue-600" : "bg-gray-700"
          } hover:bg-blue-700`}
          onClick={() => setDifficulty("Easy")}
        >
          Easy
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            difficulty === "Medium" ? "bg-blue-600" : "bg-gray-700"
          } hover:bg-blue-700`}
          onClick={() => setDifficulty("Medium")}
        >
          Medium
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            difficulty === "Hard" ? "bg-blue-600" : "bg-gray-700"
          } hover:bg-blue-700`}
          onClick={() => setDifficulty("Hard")}
        >
          Hard
        </button>
        <select
          className="px-4 py-2 text-white bg-gray-700 rounded-md"
          value={timeLimit}
          onChange={(e) => setTimeLimit(Number(e.target.value))}
        >
          <option value={30}>30 Seconds</option>
          <option value={60}>1 Minute</option>
          <option value={120}>2 Minutes</option>
        </select>
      </div>

      {/* Generated Text */}
      <div className="w-full max-w-2xl px-4 py-4 mb-6 text-center bg-gray-800 border border-gray-700 rounded-md shadow-md animate-fade-in">
        {generatedText}
      </div>

      {/* Typing Area */}
      {testStarted && (
        <textarea
          className="w-full h-24 max-w-2xl px-4 py-2 transition-all duration-200 bg-gray-800 border border-gray-700 rounded-md shadow-md resize-none focus:ring-4 focus:ring-blue-500"
          placeholder="Start typing here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      )}

      {/* Timer and Start Button */}
      <div className="flex items-center gap-4 mt-4">
        <div className="text-xl font-semibold animate-pulse">
          Time Left: {timeLeft}s
        </div>
        {!testStarted && (
          <button
            className="px-6 py-2 transition transform bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105"
            onClick={startTest}
          >
            Start Test
          </button>
        )}
      </div>

      {/* Results */}
      {resultsVisible && (
        <div className="w-full max-w-md p-6 mt-8 text-center bg-gray-800 rounded-md shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-yellow-400">Results</h2>
          <p className="text-lg">WPM: <span className="font-bold">{wpm}</span></p>
          <p className="text-lg">
            Accuracy: <span className="font-bold">{accuracy}%</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
