import React, { useState } from 'react';

export default function AddMore() {
  const [inputFields, setInputFields] = useState([<Bundle/>]);

  function Input(props) {
    return (
    <>
        <input type={props.type} id={props.id} placeholder={props.holder} />

    </>
    
);
  }


  function Bundle(){
    return (
        <>
        <div><Input type="text" id="school" holder="School" /></div>
        <div><Input type="text" id="type" holder="Type" /></div>
        <div><Input type="text" id="score" holder="Score" /></div>    
        <div><span><button>Save</button></span><span><button>Delete</button></span></div>    
        </>
    )
  }


  

  function createMore() {
    setInputFields([...inputFields, { id: `input${inputFields.length + 1}`}]);
  }

  return (
    <>
      {inputFields.map((index) => (
        <div key={index}>
            <Bundle />
        </div>
      ))}

      <button type="button" onClick={createMore}>
        Add More
      </button>
    </>
  );
}
