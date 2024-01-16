import React, { useState } from "react";

export default function SaveFields() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  function handleSubmit() {
    setData([...data, text]);
    setText(""); // Clear the input field after submission
  }

  return (
    <>
      <input
        type="text"
        id="name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <h3>Displayer</h3>

      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
