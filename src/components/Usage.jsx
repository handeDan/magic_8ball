import React from "react";

function Usage() {
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <p className="font-bold text-xl">How to use Magic 8Ball?</p>
      <ul className="flex justify-center items-center flex-col mt-10 text-indigo-800 text-md gap-2">
        <li>.</li>
        <li>.</li>
        <li>Ask a Yes or No Question</li>
        <li>Shake the Magic 8Ball</li>
        <li>Look Through the Window</li>
        <li>Interpret the Answer</li>
        <li>Repeat as Needed</li>
        <li>.</li>
        <li>.</li>
      </ul>
      <div className="text-center mt-10 bg-indigo-800 w-full h-16 pt-2 text-white">
        <p>
          Remember, the Magic 8-Ball is just for fun, and its answers are
          random, so don’t take them too seriously!
          <p>Enjoy the moment of mystery and let it spark some curiosity.</p>
        </p>
      </div>
    </div>
  );
}

export default Usage;
