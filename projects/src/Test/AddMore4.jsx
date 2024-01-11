import React, { useState } from "react";

function Input(props) {
    return (
        <>
            <input type={props.type} id={props.id} placeholder={props.holder} />
        </>
    );
}

function Bundle({index}) {
    return (
        <>
            <div><Input type="text" id="school" holder="School" /></div>
            <div><Input type="text" id="type" holder="Type" /></div>
            <div><Input type="text" id="score" holder="Score" /></div>
            <div><span><button>Save</button></span><span><button>Delete</button></span></div>
            <div>{index} </div>
        </>
    )
}

function Addmore4() {
    const [inputFields, setInputFields] = useState([<Bundle />]);

    
    



    return (
        <div>
            { inputFields && inputFields.map((index,id) => (
                <div key={index}>
                    <Bundle index={id} />
                </div>
            ))}

            <button type="button" onClick={createMore}>
                Add More
            </button>
        </div>
    )
}

export default Addmore4;