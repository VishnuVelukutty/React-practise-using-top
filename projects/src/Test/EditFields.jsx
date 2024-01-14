import React, { useState } from 'react';
export default function AddMore() {
  const [inputFields, setInputFields] = useState([{ id: 'input1', holder: 'First Input' }]);

  function Input(props) {
    return (

      <>
        <input type={props.type} id={props.id} placeholder={props.holder} />

        <button type="button" onClick={createMore}>
          Add More
        </button>

        <button type="button" onClick={saveText}>
          Save
        </button>

        <button type="button" onClick={editText}>
          Edit
        </button>

        <button type="button" onClick={deleteText}>
          Delete
        </button>

      </>
    )
  }

  function createMore() {
    setInputFields([...inputFields, { id: `input${inputFields.length + 1}`, holder: 'New Input' }]);
  }


  function editText() {
    console.log("Edit Clicked")
  }

  function saveText(event) {
    event.preventDefault();
    const [getData,setData] = useState([])
    console.log("Save Clicked")

    const data = document.getElementById("")

  }

  function deleteText() {
    console.log("delete Clicked")

  }

  return (
    <>
      {inputFields.map((field, index) => (
        <div key={index}>
          <Input type="text" id={field.id} holder={field.holder} />
        </div>
      ))}
    </>
  );
} 