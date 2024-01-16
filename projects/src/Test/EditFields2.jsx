import React, { useState } from "react";

export default function SaveFields() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit() {
    if (editIndex !== null) {
      // If in edit mode, update the existing item
      const newData = [...data];
      newData[editIndex] = text;
      setData(newData);
      setEditIndex(null); // Exit edit mode
    } else {
      // Otherwise, add a new item
      setData([...data, text]);
    }

    setText(""); // Clear the input field after submission
  }

  function handleEdit(index) {
    setEditIndex(index);
    setText(data[index]);
  }

  function handleDelete(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setEditIndex(null); // Ensure to exit edit mode if deleting the item being edited
  }

  return (
    <>
      <input
        type="text"
        id="name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update" : "Submit/Edit"}
      </button>

      <h3>Displayer</h3>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {index === editIndex ? (
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            ) : (
              <span>{item}</span>
            )}
            <button
              type="button"
              onClick={() => (index === editIndex ? handleSubmit() : handleEdit(index))}
            >
              {index === editIndex ? "Cancel" : "Edit"}
            </button>
            {!editIndex && (
              <button type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
