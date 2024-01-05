import { useState } from 'react';
function Input(props) {

    return (
        <input type={props.type} placeholder={props.placeholder} />
    )

}

function Button(props) {
    return (
        <button type={props.type}>{props.text}</button>
    )
}


export default function Cvapp() {

    const [fname, setFname] = useState('');
    const [sName, setSname] = useState('');


    return (
        <>

            <div><h1>Inputter</h1></div>

            <hr />

            <div><Input type='text' value={fname} placeholder='Name' onChange={(event) => {
                setFname(event.target.value)
            }
            }></Input></div>

            {/**
             * setting value will set it permanently
             */}

            <div><Input type='text' value={sName} placeholder='Surname' onChange={(event)=>{
                setSname(event.target.value)
            }}></Input></div>
            <br />
            <hr />

            <div><h1>Displayer</h1></div>

            <div><span>NAME : </span><br /><h1>{fname}</h1></div>

            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>



        </>
    )
}