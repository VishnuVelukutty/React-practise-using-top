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

    const [genInfo, setGenInfo] = useState([]);
    const [eduInfo, setEduInfo] = useState([]);
    const [workInfo, setWorkInfo] = useState([]);


    let genInfoColl = {
          fname:    ""       , surname:  ""
        , email:    ""       , phno:     ""      , addr:     ""  }

    setGenInfo([...genInfo,genInfoColl]);


    let eduInfoColl = {
          school: ""
        , degree: ""
        , start:  ""        , end:    ""      , loc:    ""  }

    setEduInfo([...eduInfo,eduInfoColl]);


    let workInfoColl = {
comp : "",
title :  "",
start :  "",
end :   "",
desc :   "",
    }
setWorkInfo([...workInfo,workInfoColl]);





    return (
        <>
            <form>
                <div>
                    <div><p>General Information</p></div>
                    <div><Input type="text" value={genInfoColl.fname} onChange={(event)=>{setGenInfo(event.target.value)}} id="fname" placeholder="Name" /></div>
                    <div><Input type="text" value={genInfoColl.surname} onChange={(event)=>{setGenInfo(event.target.value)}} id="surname" placeholder="Surname" /></div>
                    <div><Input type="text" value={genInfoColl.email} onChange={(event)=>{setGenInfo(event.target.value)}} id="email" placeholder="Email" /></div>
                    <div><Input type="text" value={genInfoColl.phno} onChange={(event)=>{setGenInfo(event.target.value)}} id="phno" placeholder="Phone Number" /></div>
                    <div><Input type="text" value={genInfoColl.addr} onChange={(event)=>{setGenInfo(event.target.value)}} id="addr" placeholder="Address" /></div>
                </div>
                <hr />

                <div>
                    <div><p>Education Information</p></div>
                    <div><Input type="text" value={eduInfoColl.school} onChange={(event)=>{setEduInfo(event.target.value)}} id="school" placeholder="School" /></div>
                    <div><Input type="text" value={eduInfoColl.degree} onChange={(event)=>{setEduInfo(event.target.value)}} id="degree" placeholder="Degree" /></div>
                    <div><Input type="text" value={eduInfoColl.start} onChange={(event)=>{setEduInfo(event.target.value)}} id="start" placeholder="Start Date" /></div>
                    <div><Input type="text" value={eduInfoColl.end} onChange={(event)=>{setEduInfo(event.target.value)}} id="end" placeholder="End date" /></div>
                    <div><Input type="text" value={eduInfoColl.loc} onChange={(event)=>{setEduInfo(event.target.value)}} id="loc" placeholder="Location" /></div>
                    <div><Button type="Submit" text="Add more" /></div>

                </div>
                <hr />


                <div>
                    <div><p>Professional Experience</p></div>
                    <div><Input type="text" value={workInfoColl.comp} onChange={(event)=>{setWorkInfo(event.target.value)}} id="comp" placeholder="Company name" /></div>
                    <div><Input type="text" value={workInfoColl.title} onChange={(event)=>{setWorkInfo(event.target.value)}} id="title" placeholder="Job Title" /></div>
                    <div><Input type="text" value={workInfoColl.start} onChange={(event)=>{setWorkInfo(event.target.value)}} id="start" placeholder="Start Date" /></div>
                    <div><Input type="text" value={workInfoColl.end} onChange={(event)=>{setWorkInfo(event.target.value)}} id="end" placeholder="End Date" /></div>
                    <div><Input type="text" value={workInfoColl.desc} onChange={(event)=>{setWorkInfo(event.target.value)}} id="desc" placeholder="Description" /></div>
                    <div><Button type="Submit" text="Add more" /></div>
                </div>
                {/**
 * add button for multiple positions how to achieve it? 
 * 
 */}

                <div><span><Button type="Submit" text="Submit" /></span> <span><Button type="Submit" text="Edit" /></span> <span><Button type="Submit" text="Clear" /></span>    </div>
            </form>


            <div>
<div><h1>Basic Details</h1></div>
                <div><p>{fname}</p></div>
                <div><p>{surname}</p></div>
                <div><p>{email}</p></div>
                <div><p>{phno}</p></div>
                <div><p>{addr}</p></div>
<hr />

<div><h1>Education Details</h1></div>
                <div><p>{school}</p></div>
                <div><p>{degree}</p></div>
                <div><p>{start}</p></div>
                <div><p>{end}</p></div>
                <div><p>{loc}</p></div>
<hr />


<div><h1>Professional Details</h1></div>
                <div><p>{comp}</p></div>
                <div><p>{title}</p></div>
                <div><p>{start}</p></div>
                <div><p>{end}</p></div>
                
                <div><p>{desc}</p></div>

                


<hr />


            </div>
        </>
    )
}