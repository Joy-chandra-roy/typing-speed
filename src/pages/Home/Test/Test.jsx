import  { useState, useEffect } from "react";

const Test= () => {


  const [testDuration, setTestDuration] = useState();
  // console.log(testDuration,"new time");
  
  const [textType, setTextType] = useState("");
  // console.log(textType);

  useEffect(() => {
    // Retrieve saved values from local storage
    const savedDuration = localStorage.getItem("testDuration");
    // console.log(savedDuration,"select time");
    
    const savedTextType = localStorage.getItem("textType");

    if (savedDuration) {
      const durationInSeconds = Number(savedDuration) * 60; 
      setTestDuration(durationInSeconds)
    };

    if (savedTextType) setTextType(savedTextType);},[]);
 



  // ending update code
  const [difficulty, setDifficulty] = useState("Easy");
  const [timeLimit, setTimeLimit] = useState('60'); // Default time: 1 minute
  const [generatedText, setGeneratedText] = useState("");
  const [inputText, setInputText] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState(0);

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
    Benchmark: [
      "Advanced typing requires focus, practice, and precision.",
      "Pseudocode often serves as the foundation of logical thinking.",
      "Debugging is an essential skill for software developers.",
    ],   
    Certificate: [
      "Advanced typing requires focus, practice, and precision.",
      "Pseudocode often serves as the foundation of logical thinking.",
      "Debugging is an essential skill for software developers.",
    ],   
    Tricky: [
      "Advanced typing requires focus, practice, and precision.",
      "Pseudocode often serves as the foundation of logical thinking.",
      "Debugging is an essential skill for software developers.",
    ],   
    Blind: [
      "Advanced typing requires focus, practice, and precision.",
      "Pseudocode often serves as the foundation of logical thinking.",
      "Debugging is an essential skill for software developers.",
    ],   
    Story: [
      "Advanced typing requires focus, practice, and precision.",
      "Pseudocode often serves as the foundation of logical thinking.",
      "Debugging is an essential skill for software developers.",
    ],   
    Themed: [
      "Advanced typing requires focus, practice, and precision.",
      "Pseudocode often serves as the foundation of logical thinking.",
      "Debugging is an essential skill for software developers.",
    ],   
    Professional: [
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

  // Set the text whenever the difficulty changes
  useEffect(() => {
    setGeneratedText(getRandomText());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  // Timer functionality
  useEffect(() => {
    let timer;
    if (testStarted && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && testStarted) {
      finishTest();
    }
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testStarted, timeLeft]);

  // Start the test
  const startTest = () => {
    setTestStarted(true);
    setInputText("");
    setTimeLeft(timeLimit); // Use selected time limit
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setGeneratedText(getRandomText());
  };

  // Finish the test
  const finishTest = () => {
    setTestStarted(false);
    calculateResults();
  };

  // Calculate WPM and accuracy
  const calculateResults = () => {
    const wordsTyped = inputText.trim().split(" ").length;
    const correctChars = [...inputText].filter(
      (char, idx) => char === generatedText[idx]
    ).length;
    const totalChars = generatedText.length;

    setWpm(Math.round((wordsTyped / (timeLimit / 60)) || 0));
    setAccuracy(((correctChars / totalChars) * 100).toFixed(0));
  };

  // Handle user input
  const handleInput = (e) => {
    const value = e.target.value;
    setInputText(value);

    const correctChars = value.split("").filter((char, idx) => char === generatedText[idx]).length;
    const totalTyped = value.length;

    setErrors(totalTyped - correctChars);
    setAccuracy(((correctChars / totalTyped) * 100).toFixed(0));

    if (value.length === generatedText.length) finishTest();
  };

  // Reset the test
  const resetTest = () => {
    setTestStarted(false);
    setInputText("");
    setTimeLeft(0);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setGeneratedText(getRandomText());
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-8 text-white bg-gray-900">
      <h1 className="mb-8 text-4xl font-bold">Typing Speed Test</h1>

      {/* Difficulty Dropdown */}
      <div className="flex gap-4 mb-6">
        <div
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-48 px-4 py-2 text-black bg-white border-none bg-white-700"
        >
          <option value={textType}> Type: {textType}</option>
        </div>

        {/* Custom Time Dropdown */}
       <div
          value={timeLimit}
          onChange={(e) => setTimeLimit(Number(e.target.value))}
          className="w-48 px-4 py-2 text-black bg-white border-none bg-white-700"
        >
          <p value={testDuration}> {testDuration} </p>
        </div> 

     
      </div>

      {/* Timer and Stats */}
      <div className="flex justify-around w-full max-w-md p-4 mb-6 bg-gray-700 rounded-lg shadow-lg">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-300">Time Left</p>
          <p className="text-3xl font-bold text-yellow-400">{timeLimit}s</p>
        </div>
      <div className="text-center">
        <p className="text-lg font-medium text-gray-300">WPM</p>
        <p className="text-3xl font-bold text-green-400">{wpm}</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-gray-300">Accuracy</p>
        <p className="text-3xl font-bold text-blue-400">{accuracy}%</p>
      </div>
    </div>

      {/* Typing Text */}
      <div className="w-full max-w-2xl p-4 mb-6 bg-gray-800 border border-blue-500 rounded-md">
        {generatedText.split("").map((char, idx) => (
          <span
            key={idx}
            className={`${
              idx < inputText.length
                ? inputText[idx] === char
                  ? "text-green-400"
                  : "bg-red-500 text-white"
                : ""
            }`}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Input Area */}
      <textarea
        className="w-full h-24 max-w-2xl p-4 text-white bg-gray-800 rounded-md focus:outline-none"
        placeholder="Start typing here..."
        value={inputText}
        onChange={handleInput}
        disabled={!testStarted || timeLeft === 0}
      ></textarea>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={startTest}
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Go
        </button>
        <button
          onClick={resetTest}
          className="px-6 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Test; 