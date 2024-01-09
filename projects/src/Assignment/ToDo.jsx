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
        setTasks([...getTasks, text]);



    }

    const dataMap = getTasks.map((a) => 
        <li key={a}>{a} <span><Button text="delete" type="submit" /></span> <span><Button text="Edit" type="submit" /></span></li>)

    return (
        <>
            <div><Input type="text" id="tasks" holder="Add task" /></div>
            <div><Button type="Submit" text="Add" action={handleAdd} /></div>

            <div> <p>Tasks to be done </p></div>
            <div>
                <ol> {dataMap}
                </ol>
            </div>


        </>
    )
}