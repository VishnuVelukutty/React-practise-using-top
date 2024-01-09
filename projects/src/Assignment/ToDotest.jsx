import { useState } from "react"
export default function ToDotest() {

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

    function NewTask(){

        const dataMap = getTasks.map((a) =>
        <li key={a.id}>{a.task} <span><Button text="delete" type="submit" /></span> <span><Button text="Edit" type="submit" /></span></li>)
        return (
            <ol> {dataMap}
            </ol>
        )
    }


    function handleAdd() {
        const text = document.getElementById('tasks').value
        if (text == "") {
            document.getElementById('warn').innerText = "Cannot add Empty Task"
        }
        else{
 /*            const addTask = ([{...getTasks, task:text,id:getTasks.id++}]) 
        setTasks(addTask); 
        // EDITS DATA ON THE SAME TASK
        
        */

        const newTask = { id: getTasks.length, task: text }; // Creating a new task object
        setTasks([...getTasks, newTask]);
    }



    }

    function handleClear() {
        document.getElementById('tasks').value = ""
    }

   

    return (
        <>
            <div><Input type="text" id="tasks" holder="Add task" /></div>
            <div id="warn"></div>

            <div><span>  <Button type="Submit" text="Add" action={handleAdd} /></span> <span><Button type="Submit" text="Clear" action={handleClear} /></span>   </div>


            <div> <p>Tasks to be done </p></div>
            <div>
                <NewTask />

            </div>


        </>
    )
}