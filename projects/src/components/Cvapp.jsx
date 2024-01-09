import { useState } from 'react';
import "../styles/style.css";
function Input(props) {
    return (
        <input type={props.type} placeholder={props.placeholder} onChange={props.action}/>
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
        <div className='main'>
            <div className='left-side'>
                <div><p>Inputter</p></div>
            <hr />

            <div><p>basic details</p></div>
            <div><Input type='text' placeholder='Name' action={(event) => {
                const set = {...basicDetails,fname:event.target.value}
                setBasicDetails(set)
            }
            }></Input></div>


            <div><Input type='text' placeholder='Surname' action={(event) => {
                const set = {...basicDetails,sName:event.target.value}
                setBasicDetails(set)
            }
            }></Input></div>



            <div><Input type='text' placeholder='Email' action={(event) => {
                const set = {...basicDetails,email:event.target.value}
                setBasicDetails(set)
            }
            }></Input></div>


            <div><Input type='text' placeholder='Phone' action={(event) => {
                const set = {...basicDetails,phone:event.target.value}
                setBasicDetails(set)
            }
            }></Input></div>

            <hr />

            <div><p>Education details</p></div>

            <div>
                <Input type='text' placeholder='School Name' action={(event)=>{
                    const set = {...eduDetails,school:event.target.value}
                    setEduDetails(set)
                }}></Input>
            </div>

            <div>
                <Input type='text' placeholder='Title of Study' action={(event)=>{
                    const set = {...eduDetails,study:event.target.value}
                    setEduDetails(set)
                }}></Input>
            </div>

            <div>
                <Input type='text' placeholder='Year' action={(event)=>{
                    const set = {...eduDetails,year:event.target.value}
                    setEduDetails(set)
                }}></Input>
            </div>

            <div>
                <Input type='text' placeholder='Score' action={(event)=>{
                    const set = {...eduDetails,score:event.target.value}
                    setEduDetails(set)
                }}></Input>
            </div>

            <div>
                <Button text="Add more" type="Submit"></Button>
            </div>


            <div><p>Experience details</p></div>

            <div>
                <Input type='text' placeholder='company name' action={(event)=>{
                    const set = {...expDetails,company:event.target.value}
                    setExpDetails(set)
                }}></Input>
            </div>

            <div>
                <Input type='text' placeholder='position title' action={(event)=>{
                    const set = {...expDetails,position:event.target.value}
                    setExpDetails(set)
                }}></Input>
            </div>

            <div>
                <Input type='text' placeholder='responsibilities' action={(event)=>{
                    const set = {...expDetails,work:event.target.value}
                    setExpDetails(set)
                }}></Input>
            </div>


            <div>
                <Input type='text' placeholder='from' action={(event)=>{
                    const set = {...expDetails,from:event.target.value}
                    setExpDetails(set)
                }}></Input>
            </div>
            <div>
                <Input type='text' placeholder='to' action={(event)=>{
                    const set = {...expDetails,to:event.target.value}
                    setExpDetails(set)
                }}></Input>
            </div>

            <div>
                <Button text="Add more" type="Submit"></Button>
            </div>
            </div>

            <br />
            <hr />
<div className='right-side'>
            <div><p>Displayer</p></div>
            <div><p>Basic Details</p></div>
            <div><span>NAME : </span><br /><p>{basicDetails.fname}</p></div>
            <div><span>SURNAME : </span><br /><p>{basicDetails.sName}</p></div>
            <div><span>Email : </span><br /><p>{basicDetails.email}</p></div>
            <div><span>Phone : </span><br /><p>{basicDetails.phone}</p></div>

            <div><p>Education Details</p></div>
            <div><span>School Name : </span><br /><p>{eduDetails.school}</p></div>
            <div><span>Title of Study : </span><br /><p>{eduDetails.study}</p></div>
            <div><span>Year : </span><br /><p>{eduDetails.year}</p></div>
            <div><span>Score : </span><br /><p>{eduDetails.score}</p></div>


            <div><p>Experience Details</p></div>
            <div><span>company name : </span><br /><p>{expDetails.company}</p></div>
            <div><span>position title : </span><br /><p>{expDetails.position}</p></div>
            <div><span>responsibilities : </span><br /><p>{expDetails.work}</p></div>
            <div><span>from : </span><br /><p>{expDetails.from}</p></div>
            <div><span>TO : </span><br /><p>{expDetails.to}</p></div>
            </div>

            </div>
        </>
    )
}