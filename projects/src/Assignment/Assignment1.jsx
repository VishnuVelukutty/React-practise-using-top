import { useState } from "react";
export default function Assignment1() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };



    {/*
    * if u are using this 
    useState([]) then u dont have to set newPerson

*/}

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <div><input type="text" onChange={(event) => {

        const newName = { ...person, name: event.target.value }
        setPerson(newName)
      }} placeholder="Name"></input></div>


      <div><input type="text" onChange={
        (event)=>{
          setPerson((fname)=>({...fname,name:event.target.value}));

        }
      }></input></div>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}