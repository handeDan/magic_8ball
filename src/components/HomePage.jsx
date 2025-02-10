import React from "react";
import Ball from "./Ball";
import Shake from "./Shake";

function HomePage({ handleClick, isShaking }) {
  return (
    <div>
      <Ball handleClick={handleClick} isShaking={isShaking} />
      <Shake handleClick={handleClick} isShaking={isShaking} />
    </div>
  );
}

export default HomePage;
