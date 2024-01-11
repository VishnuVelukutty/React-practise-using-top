import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Cvapp from './Projects/Cvapp.jsx'
import Assignment1 from './Assignment/Assignment1'
import ToDo from './Assignment/ToDo'
import ToDotest from './Assignment/ToDotest'
import AddMore2 from './Test/AddMore2.jsx'
import AddMore3 from './Test/AddMore3.jsx'
import Addmore4 from './Test/AddMore4.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Cvapp />
{/*     <AddMore3 />
 */}    {/* <Addmore4 /> */}
    <h2 style={{background: 'blue'}}>app</h2>
    </>
  )
}

export default App
