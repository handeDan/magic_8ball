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
        className="flex justify-center items-center flex-col mt-10"
      >
        <input
          type="text"
          placeholder="Type your question here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border rounded-md border-black px-3 py-2"
        />
        <br />
        <button
          type="submit"
          onClick={handleClick}
          className="border rounded-md border-black px-3 py-2"
        >
          Shake it!
        </button>
        <div>
          {submitQuestion && (
            <div className="mt-4 p-2 border rounded-md bg-gray-200">
              <strong>Your Question:</strong> {submitQuestion}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Shake;
