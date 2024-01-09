import { useState } from "react"
export default function ToDo() {

    const [getTasks, setTasks] = useState([]);

    function Button(props) {
        return (
            <button type={props.type} onClick={props.action}>{props.text}</button>
        )
    }


    function Input(props) {
        return (
            <input type={props.type} id={props.id} placeholder={props.holder}></input>
        )
    }


    function handleAdd() {
        const text = document.getElementById('tasks').value
        if (text == "") {
            document.getElementById('warn').innerText = "Cannot add Empty Text"
        }
        else{
        setTasks([...getTasks, text]);}



    }

    function handleClear() {
        document.getElementById('tasks').value = ""
    }

    const dataMap = getTasks.map((a) =>
        <li key={a}>{a} <span><Button text="delete" type="submit" /></span> <span><Button text="Edit" type="submit" /></span></li>)

    return (
        <>
            <div><Input type="text" id="tasks" holder="Add task" /></div>
            <div id="warn"></div>

            <div><span>  <Button type="Submit" text="Add" action={handleAdd} /></span> <span><Button type="Submit" text="Clear" action={handleClear} /></span>   </div>


            <div> <p>Tasks to be done </p></div>
            <div>
                <ol> {dataMap}
                </ol>
            </div>


        </>
    )
}