import React, { useState } from 'react';

export default function AddMore() {
  const [inputFields, setInputFields] = useState([{ id: 'tasks', holder: 'First Input' }]);

  function Input(props) {
    return <input type={props.type} id={props.id} placeholder={props.holder} />;
  }

  function createMore() {
    setInputFields([...inputFields, { id: `input${inputFields.length + 1}`, holder: 'New Input' }]);
  }

  return (
    <>
      {inputFields.map((field, index) => (
        <div key={index}>
          <Input type="text" id={field.id} holder={field.holder} />
        </div>
      ))}

      <button type="button" onClick={createMore}>
        Add More
      </button>
    </>
  );
}
