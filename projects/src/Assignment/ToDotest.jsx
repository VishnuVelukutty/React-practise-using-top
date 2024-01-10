import { useState } from "react"
export default function ToDotest() {

    const [getTasks, setTasks] = useState([]);


    /** 
     * Components 
    */
    function Button(props) {
        return (
            <button type={props.type} onClick={props.action}>{props.text}</button>
        )
    }


    function Input(props) {
        return (
            <input type={props.type} id={props.id} placeholder={props.holder} value={props.value}></input>
        )
    }

    function NewTask(){

        const dataMap = getTasks.map((a) =>
        <li key={a.id}> <Input type="checkbox" />  {a.task} <span><Button text="delete" type="submit" action={()=> handleDelete(a.id)} /></span> <span><Button text="Edit" type="submit" action={()=>(handleEdit(a.id))}/></span></li>)
     
        return (
            <ol> {dataMap}
            </ol>
        )
    }

/**
 * Responsive functions 
 */
    function handleAdd() {
        const text = document.getElementById('tasks').value
        if (text == "") {
            document.getElementById('warn').innerText = "Cannot add Empty Task"
        }
        else{
// EDITS DATA ON THE SAME TASK      
/*const addTask = ([{...getTasks, task:text,id:getTasks.id++}]) 
        setTasks(addTask); */

        const newTask = { id: getTasks.length, task: text }; // Creating a new task object
        setTasks([...getTasks, newTask]);
    }



    }

    function handleClear() {
        document.getElementById('tasks').value = ""
    }

    const [isEditing, setEditing] = useState(false);

    function handleEdit(id){
        console.log("Edit was clicked"+id)
        setEditing(true)

        const editedTask = getTasks.find(task => task.id === id);
        

        setTasks(...getTasks,editedTask);

          {isEditing ? (
            <Input type="text" value={editedTask} />
         ) : (
            <span><Button text="Edit" type="submit" action={() => handleEdit(a.id)} /></span>
         )}         
    }

    function handleDelete(id){
        console.log("Delete was clicked"+id)
        const updatedTasks = getTasks.filter(task => task.id !== id);
        setTasks(updatedTasks);

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