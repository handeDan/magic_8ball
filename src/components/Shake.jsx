import React, { useState } from "react";

function Shake({ handleClick }) {
  const [question, setQuestion] = useState(""); // Kullanıcı sorusunu tutar
  const [submitQuestion, setSubmitQuestion] = useState(""); // Submit edilen soruyu tutar

  const handleSubmit = (e) => {
    e.preventDefault(); // Form submit olduğunda sayfa yenilenmesin
    setSubmitQuestion(question);
    setQuestion("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col mt-8"
      >
        <input
          type="text"
          placeholder="type your question here.."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border rounded-xl border-black px-3 py-2 w-80"
        />
        <button
          type="submit"
          onClick={handleClick}
          className="border mt-4 rounded-xl border-black px-3 py-2 bg-indigo-800 text-white"
        >
          Shake it!
        </button>
        <div>
          {submitQuestion && (
            <div className="mt-4 p-2 border rounded-sm bg-gray-200">
              <strong>Your Question:</strong> {submitQuestion}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Shake;
