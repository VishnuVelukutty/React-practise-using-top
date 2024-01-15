import { useState } from "react";

export default function EditFields() {
  const [getData, setData] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    const data = document.getElementById("text").value;
    setData(data);
    setSubmitted(true);
  }

  function handleClear() {
    setData("");
    setSubmitted(false);
  }

  function handleUpperCase() {
    const upperCaseData = getData.toUpperCase();
    setData(upperCaseData);
    setSubmitted(false);
  }


  function edit(){
    
  }

  return (
    <>
      <input
        type="text"
        id="text"
        placeholder="Name"
        value={getData}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      {submitted && (
        <>
          <h3>Displayer</h3>
          <p id="display">{getData}</p>

          {/* Adding two buttons */}
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleUpperCase}>Uppercase</button>
        </>
      )}
    </>
  );
}
