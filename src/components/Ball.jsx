import axios from "axios";
import React, { useEffect, useState } from "react";

function Ball({ handleClick, isShaking }) {
  const [list, setList] = useState(null);
  const [answer, setAnswer] = useState("8");

  useEffect(() => {
    axios
      .get("data.json")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isShaking && list) {
      const randomIndex = Math.floor(Math.random() * Object.keys(list).length);
      const result = list["ans_" + randomIndex];
      setAnswer(result);
    }
  }, [isShaking, list]);

  return (
    <div className="flex justify-center items-center mt-14">
      <div
        className={`${
          isShaking ? "animate-shake" : ""
        } bg-gradient-to-tl from-black to-stone-700 p-10 border rounded-full w-96 h-96 flex justify-center items-center cursor-pointer`}
        onClick={handleClick}
      >
        <div className="border bg-gradient-to-tl from-gray-400 to-white p-10 rounded-full w-36 h-36 flex justify-center items-center">
          <div
            style={{
              fontSize: answer === "8" || isShaking ? "4em" : "1em",
              lineHeight: 1.3,
            }}
            className="text-4xl font-bold text-center text-indigo-800"
          >
            {isShaking ? "8" : answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ball;
