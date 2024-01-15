import { useState } from "react"

export default function SaveFields(){

  const [getData,setData] = useState([])
  function handleSubmit(){
    const data = document.getElementById("text").value
    setData(...getData,data);
    document.getElementById("display").innerHTML = data;
    setData("")
  }

  return (
    <>
    <input type="text" id="text" placholder="Name" value={getData} onChange={(e)=> setData(e.target.value)}></input>
    <button onClick={handleSubmit}>Submit</button>

    <h3>Displayer</h3>

    <p id="display"></p>

    </>
  )

}