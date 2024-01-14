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




/* export default function AddMore() {

  // addmore 2
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
} */

/* 
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


  function MultiBundles() {
    const [inputFields, setInputFields] = useState([<Bundle/>]);

    const createMore = () => {
        setInputFields([...inputFields, { id: `input${inputFields.length + 1}` }]);
    }

    return (
        <>
          {inputFields.map((index) => (
            <div key={index.id}>
                <Bundle />
            </div>
          ))}
    
          <button type="button" onClick={createMore}>
            Add More
          </button>
        </>
      );
  }

// add more 3
export default function AddMore() {

    return (
        <div>
            <MultiBundles />
        </div>
    );
} */