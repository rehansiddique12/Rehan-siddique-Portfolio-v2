import React, { useState, useEffect } from "react";

type LoaderProps = {
  onComplete: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setDone(true); // trigger exit animation
          setTimeout(() => {
            onComplete(); // notify App after animation ends
          }, 0.5); // match animation duration
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  const activeBlocks = Math.floor((progress / 100) * 10);

  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-gray-50 p-4 transition-transform duration-1000 ease-in-out ${
        done ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl w-full max-w-xs sm:max-w-lg">
        {/* Loader Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg sm:text-xl font-semibold text-gray-800 tracking-wider">
            LOADER
          </span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
        </div>

        {/* Progress Blocks */}
        <div className="flex justify-between items-center mb-4 bg-black/5 px-2 sm:px-3 py-2 rounded-lg">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={`w-5 h-5 sm:w-8 sm:h-8 rounded-sm md:rounded-lg transition-colors duration-100 ${
                index < activeBlocks ? "bg-gray-800" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>

        {/* Percentage Text */}
        <div className="flex justify-end mt-4">
          <span className="text-lg sm:text-2xl font-semibold text-gray-500">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
