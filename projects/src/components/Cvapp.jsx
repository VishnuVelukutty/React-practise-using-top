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

    const [fName, setFname] = useState('');
    const [sName, setSname] = useState();


    return (
        <>

            <div><h1>Inputter</h1></div>

            <hr />

            <div><p>basic details</p></div>
            <div><input type='text' placeholder='Name' onChange={(event) => {
                setFname(event.target.value)
            }
            }></input></div>


            <div><input type='text' placeholder='Surname' onChange={(event) => {
                setSname(event.target.value)
            }
            }></input></div>



            <div><input type='text' placeholder='Email' onChange={(event) => {
                setFname(event.target.value)
            }
            }></input></div>


            <div><input type='text' placeholder='Phone' onChange={(event) => {
                setFname(event.target.value)
            }
            }></input></div>

            <hr />

            <div><p>Education details</p></div>


            <div>
                <input type='text' placeholder='School Name'></input>
            </div>

            <div>
                <input type='text' placeholder='Title of Study'></input>
            </div>

            <div>
                <input  type='text'placeholder='Year'></input>
            </div>


            <div><p>Experience details</p></div>

            <div>
                <input type='text' placeholder='company name'></input>
            </div>

            <div>
                <input type='text' placeholder='position title'></input>
            </div>

            <div>
                <input type='text' placeholder='responsibilities'></input>
            </div>


            <div>
                <input type='text' placeholder='from'></input>
            </div>
            <div>
                <input type='text' placeholder='to'></input>
            </div>




            {/**
             * setting value will set it permanently
             * not working for custom component i.e <Input > check why 
             */}

            <br />
            <hr />

            <div><h1>Displayer</h1></div>


            <div><p>Basic Details</p></div>

            <div><span>NAME : </span><br /><h1>{fName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>

            <div><p>Education Details</p></div>

            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>


            <div><p>Experience Details</p></div>

            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{sName}</h1></div>







        </>
    )
}