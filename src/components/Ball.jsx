import React from "react";

function Ball({ handleClick, isShaking }) {
  return (
    <div className="flex justify-center items-center mt-20">
      <div
        className={`${
          isShaking ? "animate-shake" : ""
        } bg-gradient-to-tl from-black to-stone-700 p-10 border rounded-full w-80 h-80 flex justify-center items-center`}
        onClick={handleClick}
      >
        <div className="border bg-gradient-to-tl from-gray-400 to-white p-10 rounded-full w-32 h-32 flex justify-center items-center">
          <span className="text-4xl font-bold">8</span>
        </div>
      </div>
    </div>
  );
}

export default Ball;
