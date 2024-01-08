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

    const [basicDetails, setBasicDetails] = useState({ fname: '', sName: '', email: '', phone: '' });
    const [eduDetails, setEduDetails] = useState({ school: '', study: '', year: '', score: '' });
    const [expDetails, setExpDetails] = useState({ company: '', position: '', work: '', from: '', to: '' });


    return (
        <>

            <div><h1>Inputter</h1></div>

            <hr />

            <div><p>basic details</p></div>
            <div><input type='text' placeholder='Name' onChange={(event) => {
                const set = {...basicDetails,fname:event.target.value}
                setBasicDetails(set)
            }
            }></input></div>


            <div><input type='text' placeholder='Surname' onChange={(event) => {
                const set = {...basicDetails,sName:event.target.value}
                setBasicDetails(set)
            }
            }></input></div>



            <div><input type='text' placeholder='Email' onChange={(event) => {
                const set = {...basicDetails,email:event.target.value}
                setBasicDetails(set)
            }
            }></input></div>


            <div><input type='text' placeholder='Phone' onChange={(event) => {
                const set = {...basicDetails,phone:event.target.value}
                setBasicDetails(set)
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
                <input type='text' placeholder='Year'></input>
            </div>

            <div>
                <input type='text' placeholder='Score'></input>
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

            <div><span>NAME : </span><br /><h1>{basicDetails.fname}</h1></div>
            <div><span>SURNAME : </span><br /><h1>{basicDetails.sName}</h1></div>
            <div><span>Email : </span><br /><h1>{basicDetails.email}</h1></div>
            <div><span>Phone : </span><br /><h1>{basicDetails.phone}</h1></div>

            <div><p>Education Details</p></div>

            <div><span>School Name : </span><br /><h1>{}</h1></div>
            <div><span>Title of Study : </span><br /><h1>{}</h1></div>
            <div><span>Year : </span><br /><h1>{}</h1></div>
            <div><span>Score : </span><br /><h1>{}</h1></div>


            <div><p>Experience Details</p></div>

            <div><span>company name : </span><br /><h1>{}</h1></div>
            <div><span>position title : </span><br /><h1>{}</h1></div>
            <div><span>responsibilities : </span><br /><h1>{}</h1></div>
            <div><span>from : </span><br /><h1>{}</h1></div>
            <div><span>TO : </span><br /><h1>{}</h1></div>








        </>
    )
}