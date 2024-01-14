import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Cvapp from './Projects/Cvapp.jsx'
import Assignment1 from './Assignment/Assignment1'
import ToDo from './Assignment/ToDo'
import ToDotest from './Assignment/ToDotest'
import AddMore from './Test/AddMore.jsx'
import EditFields from './Test/EditFields.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

{/* 
<Cvapp />
<Assignment1 />
<ToDo />
<ToDotest />
<AddMore />


*/}
<EditFields />

 
 </>
  )
}

export default App
