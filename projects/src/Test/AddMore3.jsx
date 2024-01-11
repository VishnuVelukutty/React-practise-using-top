import React, { useState } from 'react';





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


export default function AddMore3() {

    return (
        <div>
            <MultiBundles />
        </div>
    );


  
}
